import { utilService } from '../../../services/utilService.js';
import { storageService } from '../../../services/storageService.js';

const KEY = 'mailDB';
export const mailService = {
    query,
    remove,
    // save,
    // getById,
    // getNextPrevPet
};
var gMails;
_createMails();

function _createMails() {
    gMails = _loadMailsFromStorage();
    if (!gMails || !gMails.length) {
        gMails = _getDemoMails()
        _saveMailsToStorage();
    }
}

function _loadMailsFromStorage() {
    storageService.load(KEY);
}

function _saveMailsToStorage() {
    storageService.save(KEY, gMails)
}

function _getDemoMails() {
    const mails = [
        { id: 'i101', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594 },
        { id: 'i102',  subject: 'Sprint meeting', body: 'Pick up!', isRead: true, sentAt : 1551133930494 },
        { id: 'i103',  subject: 'Good morning!', body: 'How are you today?', isRead: true, sentAt : 1551133930591 }
    ];
    return mails;
}

function query() {
    return Promise.resolve(gMails);
}

function remove(mailId) {
    gMails = gMails.filter(mail => mail.id !== mailId);
    _saveMailsToStorage();
    return Promise.resolve();
}

// function getById(petId) {
//     const pet = gMails.find(pet => pet.id === petId);
//     return Promise.resolve(pet);
// }

// function getNextPrevPet(petId) {
//     return {
//         prevPetId: null,
//         nextPetId: null
//     }
// }


// function save(pet) {
//     if (pet.id) {
//         return _update(pet);
//     } else {
//         return _add(pet);
//     }
// }

// function _add(pet) {
//     const petToAdd = {
//         id: utilService.makeId(),
//         ...pet
//     };
//     gMails = [petToAdd, ...gMails];
//     _savePetsToStorage();
//     return Promise.resolve(petToAdd);
// }

// function _update(pet) {
//     const petToUpdate = {
//         ...pet
//     };
//     const petsCopy = [...gMails];
//     const petIdx = petsCopy.findIndex(pet => pet.id === pet.id);
//     petsCopy[petIdx] = petToUpdate;
//     gMails = petsCopy;
//     _savePetsToStorage();
//     return Promise.resolve(petToUpdate);
// }


