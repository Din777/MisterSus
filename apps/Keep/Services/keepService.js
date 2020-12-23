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
    // return gNotes
}

function remove(noteId){
    gNotes = gNotes.filter(note => note.id !== noteId);
    _saveNotesToStorage();
    return Promise.resolve();
}

function getById(noteId){
    const note = gNotes.find(note => note.id === noteId);
    return Promise.resolve(note);
}

function save(note){
    // if (note.id){
    //     return _update(note);
    // } else {
    //     return _add(note);
    // }
    _add(note)
}

function _saveNotesToStorage(gNotes=notes) {
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
            }
        }, 
        {
            id: utilService.makeId(),
            type: "NoteImg",
            info: {
                url: "./assets/img/world.jpg",
                title: "Holding my imagination"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: utilService.makeId(),
            type: "NoteTodos",
            info: {
                label: "How was it:", todos: [
                    { txt: "Do that", doneAt: null },
                    { txt: "Do this", doneAt: 187111111 }]
            }
        },
        {
            id: utilService.makeId(),
            type:"NoteText",
            isPinned: false,
            info: {
                txt: "I contain multitudes"
            }
        }

    ];
    console.log('notes',notes);
    return notes;
}

function _add(txt){
    const noteToAdd = {
        id: utilService.makeId(),
        type: "NoteText",
        isPinned: false,
        info: {
            txt: txt
        }
    };
    gNotes.push(noteToAdd)
    console.log('gNotes',gNotes);
    _saveNotesToStorage(gNotes);
    // return Promise.resolve(noteToAdd)
}

function _update(note){
    const noteToUpdate = {
        ...noteToUpdate
    };
    const notesCopy = [...gNotes];
    const noteIdx = notesCopy.findIndex(note => note.id === note.id);
    notesCopy[noteIdx] = noteToUpdate;
    gNotes = notesCopy;
    _saveNotesToStorage()
    return Promise.resolve(noteToUpdate);
}

