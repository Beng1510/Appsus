import { utilsService } from './utils-service.js'

export const mailService = {

    query,
    getMailById,
    saveMails,
    deleteMail,
    addMail,
    getNewMail
}

var gMails = _createMails()

// function countReadMail(){
//  console.log(gMails);
// }


function query() {
    saveMails();
    return gMails
}

function getNewMail() {

    const today = new Date();
    const mail = {
        id: utilsService.makeId(),
        user: '',
        subject: '',
        body: '',
        isRead: false,
        sentAt: today.toISOString().substr(0, 10)
    }
    return mail
}

function addMail(mail) {
    // console.log('mail:', mail)
    
    gMails.push(mail)
    console.log('gMails:', gMails)
    query();
    return gMails
}

function deleteMail(mailId) {

    const idx = gMails.findIndex(mail => mail.id === mailId)
    gMails.splice(idx, 1)
    console.log('mails:', gMails)
    saveMails();
    query();
    return gMails
}

function saveMails() {
    utilsService.storeToStorage('mails', gMails)
}

function getMailById(id) {
    const mail = gMails.find(mail => mail.id === id)
    // return Promise.resolve(mail)
    return mail
}

function _createMails() {

    var mails = utilsService.loadFromStorage('mails');
    // if (mails && mails.length) return mails;

    mails = [{
        id: utilsService.makeId(),
        user: 'dor@walla.com',
        subject: 'sport',
        body: 'hello! my name is dor and i like to run1',
        isRead: false,
        sentAt: 22/11/2019
    },
    {
        id: utilsService.makeId(),
        user: 'zoe@gmail.com',
        subject: 'food',
        body: 'hello! my name is dor and i like to run2',
        isRead: false,
        sentAt: 12/1/2019
    },
    {
        id: utilsService.makeId(),
        user: 'ben@hotmail.com',
        subject: 'gym',
        body: 'hello! my name is',
        isRead: false,
        sentAt: 22/3/2019
    },
    {
        id: utilsService.makeId(),
        user: 'ben@hotmail.com',
        subject: 'sport',
        body: 'hello! my name is dor and i like to run3hello! my name is dor and i like to run3hello! my name is dor and i like to run3hello! my name is dor and i like to run3',
        isRead: false,
        sentAt: 23/1/2019
    },
    {
        id: utilsService.makeId(),
        user: 'ben@hotmail.com',
        subject: 'sport',
        body: 'hello! my name is dor and i like to run3',
        isRead: false,
        sentAt: 22/11/2019
    }
    ]
    return mails
}