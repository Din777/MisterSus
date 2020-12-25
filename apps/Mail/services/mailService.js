import { utilService } from '../../../services/utilService.js';
import { storageService } from '../../../services/storageService.js';

const KEY = 'mailDB';
export const mailService = {
    query,
    remove,
    save,
    getById,
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
        { id: 'i101', subject: 'HaLayla od tzair', body: '', from: 'Adi', isRead: false, sentAt : 1608901373428 },
        { id: 'i102',  subject: 'Sprint meeting', body: 'Learn the definition documents and make a plan regarding the structure and working together.\n Create the following folder structure of the Appsus app!', from: 'Dina', isRead: true, sentAt : 1608801273428 },
        { id: 'i103',  subject: 'Good morning!', body: 'How are you today?', from: 'Adi', isRead: true, sentAt : 1608701273428 },
        { id: 'i104',  subject: 'Wassap?', body: 'Pick up!', from: 'Dina', isRead: true, sentAt : 1551133930594 }
    ];
    return mails;
}

function query() {
    return Promise.resolve(gMails);
}

// function addMailToView(){

// }

function remove(mailId) {
    gMails = gMails.filter(mail => mail.id !== mailId);
    _saveMailsToStorage();
    return Promise.resolve();
}

function save(mail) {
    if (mail.id) {
        return _update(mail);
    } else {
        return _add(mail);
    }
}

function _add(mail) {
    const mailToAdd = {
        id: utilService.makeId(),
        ...mail
    };
    gMails = [mailToAdd, ...gMails];
    _saveMailsToStorage();
    return Promise.resolve(mailToAdd);
}

function _update(mail) {
    const mailToUpdate = {
        ...mail
    };
    const mailsCopy = [...gMails];
    const mailIdx = mailsCopy.findIndex(mail => mail.id === mailToUpdate.id);
    mailsCopy[mailIdx] = mailToUpdate;
    gMails = mailsCopy;
    _saveMailsToStorage();
    return Promise.resolve(mailToUpdate);
}

function getById(mailId) {
    const mail = gMails.find(mail => mail.id === mailId);
    return Promise.resolve(mail);
}

// function getNextPrevPet(petId) {
//     return {
//         prevPetId: null,
//         nextPetId: null
//     }
// }





