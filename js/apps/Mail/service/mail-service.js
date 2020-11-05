import { utilsService } from './utils-service.js'

export const mailService = {

    query,
    getMailById,
    saveMails,
    deleteMail,

}

var gMails = _createMails()

function query() {
    saveMails();
    return gMails
    // return Promise.resolve(gMails);
}

function deleteMail(mailId){
console.log('mailIdssssssss:', mailId)

    const idx = gMails.findIndex(mail => mail.id === mailId)

    console.log('mails:', gMails)
    gMails.splice(idx,1)
    console.log('mails:', gMails)
    // eventBus.$emit('show-msg', {txt:'Review has been deleted', type:'Success'})
    saveMails();
    
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
        sentAt: 1551133930594
    },
    {
        id: utilsService.makeId(),
        user: 'zoe@gmail.com',
        subject: 'food',
        body: 'hello! my name is dor and i like to run2',
        isRead: false,
        sentAt: 1551133900000
    },
    {
        id: utilsService.makeId(),
        user: 'ben@hotmail.com',
        subject: 'gym',
        body: 'hello! my name is dor and i like to run3',
        isRead: false,
        sentAt: 155113391000
    },
    {
        id: utilsService.makeId(),
        user: 'ben@hotmail.com',
        subject: 'sport',
        body: 'hello! my name is dor and i like to run3',
        isRead: false,
        sentAt: 155113391000
    }
    ]
    return mails
}