import { utilService } from '../../../Services/utilService.js'
import { storageService } from '../../../Services/storageService.js'

const KEY = 'notes';
export const keepService = {
    query,
    remove,
    getById,
    save
}
var gNotes;
_createNotes();

function _createNotes() {
    gNotes = storageService.load(KEY)
    if (!gNotes || !gNotes.length) {
        gNotes = _getDemoNotes()
        console.log('gNotes',gNotes);
        _saveNotesToStorage()
    }
}

function query() {
    return Promise.resolve(gNotes);
}

function remove(noteId){
    gNotes = gNotes.filter(note => note.id !== noteId);
    _saveNotesToStorage(gNotes);
    return Promise.resolve();
}

function getById(noteId){
    const note = gNotes.find(note => note.id === noteId);
    return Promise.resolve(note);
}

function save(note){
    if (note.id){
        return _update(note);
    } else {
        return _add(note);
    }
}

function _saveNotesToStorage(gNotes) {
    storageService.save(KEY, gNotes)
}

function _getDemoNotes() {

    const notes = [
        {
            id: utilService.makeId(),
            type: "NoteText",
            isPinned: true,
            info: {
                txt: "Fullstack Me Baby!"
            },
            style: {
                backgroundColor: "#00d"
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
                backgroundColor: "#00d"
            }
        },
        {
            id: utilService.makeId(),
            type: "NoteTodos",
            isPinned: false,
            info: {
                label: "How was it:", todos: [
                    { txt: "Do that", doneAt: null },
                    { txt: "Do this", doneAt: 187111111 }]
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: utilService.makeId(),
            type:"NoteText",
            isPinned: false,
            info: {
                txt: "I contain multitudes"
            },
            style: {
                backgroundColor: "#00d"
            }
        }

    ];

    return notes;
}

function _add(note){
    const noteToAdd = {
        ...note,
        id: utilService.makeId(),
    };
    gNotes = [noteToAdd, ...gNotes]
    _saveNotesToStorage(gNotes);
    return Promise.resolve(noteToAdd)
}

function _update(note){
    const noteToUpdate = {
        ...note
    };
    const notesCopy = [...gNotes];
    const noteIdx = notesCopy.findIndex(note => note.id === noteToUpdate.id);
    notesCopy[noteIdx] = noteToUpdate;
    gNotes = notesCopy;
    _saveNotesToStorage(gNotes)
    return Promise.resolve(noteToUpdate);
}

