import { utilService } from '../../../Services/utilService.js'
import { storageService } from '../../../Services/storageService.js'

const KEY = 'notes';
export const keepService = {
    query,
    remove,
    getById,
    getChangesToSave,
    getNewNoteToAdd,
    getNewNoteTemplate,
    makeNoteFromTemplate,
    getNotesForDisplay,
    togglePin

}
var gNotes;
_createNotes();

function _createNotes() {
    gNotes = storageService.load(KEY)
    
    if (!gNotes || !gNotes.length) {
        gNotes = _getDemoNotes()
        console.log('gNotes', gNotes);
        _saveNotesToStorage()
    }
}

function query() {
    return Promise.resolve(gNotes);
}

function remove(noteId) {
    gNotes = gNotes.filter(note => note.id !== noteId);
    _saveNotesToStorage(gNotes);
    return Promise.resolve();
}

function getById(noteId) {
    const note = gNotes.find(note => note.id === noteId);
    return Promise.resolve({ ...note })
}

function makeNoteFromTemplate(type, value, isPinned, backgroundColor) {
    const color = (backgroundColor === '#ffd166' ? '#d8dde4' : '#ffffff');
    var note = {
        type,
        isPinned,
        info: {
            title: 'My title'
        },
        style: {
            backgroundColor,
            color
        }
    }
    let key;
    switch (type) {
        case 'NoteTxt':
            key = 'txt'
            break;
        case 'NoteImg':
            key = 'url'
            break;
        case 'NoteVideo':
            key = 'url'
            break;
        case 'NoteTodos':
            key = 'label'
            note.info.todos = []

            break;
    }
    note.info[[key]] = value;
    return note
}

function togglePin(noteId) {
    const note = _getById(noteId)
    note.isPinned = !note.isPinned
    return Promise.resolve()

}

function getNewNoteTemplate() {
    return {
        type: 'NoteTxt',
        isPinned: false,
        info: {
            title: 'Add Your Title'
        },
        style: {
            backgroundColor: '#d8dde4',
            color:  '#d8dde4'
        }
    }
}

function _getById(noteId) {
    return gNotes.find(note => note.id === noteId)
}

function getNewNoteToAdd(note) {
    _add(note)

}

function getChangesToSave(note) {

    _update(note)

}

function getNotesForDisplay() {
    return gNotes
}

function _saveNotesToStorage() {
    storageService.save(KEY, gNotes)
}

function _getDemoNotes() {

    const notes = [
        {
            id: utilService.makeId(),
            type: "NoteTxt",
            isPinned: true,
            info: {
                title: "Baby steps",
                txt: "Fullstack Me Baby!"
            },
            style: {
                backgroundColor: "#06d6a0",
                color: "#ef476f"
            }
           
        },
        {
            id: utilService.makeId(),
            type: "NoteImg",
            isPinned: false,
            info: {
                url: "./apps/Keep/assets/img/Foxy.jpeg",
                title: "Foxy"
            },
            style: {
                backgroundColor: "#d8dde4"
            }
           
        },
        {
            id: utilService.makeId(),
            type: "NoteTodos",
            isPinned: false,
            info: {
                title: "my todo list",
                label: "How was it:",
                todos: [
                    { txt: "Do that", doneAt: null },
                    { txt: "Do this", doneAt: 187111111 }]
            },
            style: {
                backgroundColor: "#d8dde4"
            }
           
        },
        {
            id: utilService.makeId(),
            type: "NoteTxt",
            isPinned: false,
            info: {
                title: "Poetry",
                txt: "I contain multitudes"
            },
            style: {
                backgroundColor: "#d8dde4"
            }
           
        },
        {
            id: utilService.makeId(),
            type: "NoteVideo",
            isPinned: false,
            info: {
                url: "https://www.youtube.com/embed/WVyqh5MM7sA",
                title: "Halloween"
            },
            style: {
                backgroundColor: "#d8dde4"
            }
           
        }

    ];

    return notes;
}

function _add(note) {
    const noteToAdd = {
        ...note,
        id: utilService.makeId(),
    };
    gNotes = [noteToAdd, ...gNotes]
    _saveNotesToStorage();
    return Promise.resolve(noteToAdd)
}

function _update(note) {
    const noteToUpdate = {
        ...note
    };
    const notesCopy = [...gNotes];
    const noteIdx = notesCopy.findIndex(note => note.id === noteToUpdate.id);
    notesCopy[noteIdx] = noteToUpdate;
    gNotes = notesCopy;
    _saveNotesToStorage()
    return Promise.resolve(noteToUpdate);
}

