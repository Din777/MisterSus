export const utilService = {
    makeId,
    toggleMenu,
    toggleClose
};

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}


function toggleMenu() {
    document.body.classList.toggle('menu-open');
    document.querySelector('.mobile-menu-close').hidden = !document.querySelector('.mobile-menu-close').hidden;
    document.querySelector('.mobile-menu-btn').hidden = !document.querySelector('.mobile-menu-btn').hidden;
}

function toggleClose() {
    document.querySelector('.mobile-menu-close').hidden = true;
    document.querySelector('.mobile-menu-btn').hidden = false;
    document.body.classList.toggle('menu-open');
}