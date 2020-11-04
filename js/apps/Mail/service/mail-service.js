import { utilsService } from './utils-service.js'

export const mailService = {

    query,
    getMailById,
    saveMails,

}

var gMails = _createMails()

function query() {
    saveMails();
    return gMails
    // return Promise.resolve(gMails);
}


function saveMails() {
    utilsService.storeToStorage('mails', gMails)
}

function getMailById(id) {
    const mail = gMails.find(mail => mail.id === id)
    return Promise.resolve(mail)
}

function _createMails() {

    var mails = utilsService.loadFromStorage('mails');
    // if (mails && mails.length) return mails;

    mails = [{
        id: 123,
        subject: 'sport',
        body: 'hello! my name is dor and i like to run1',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: 456,
        subject: 'food',
        body: 'hello! my name is dor and i like to run2',
        isRead: false,
        sentAt: 1551133900000
    },
    {
        id: 789,
        subject: 'gym',
        body: 'hello! my name is dor and i like to run3',
        isRead: false,
        sentAt: 155113391000
    }
    ]
    return mails
}