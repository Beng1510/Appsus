import { utilsService } from './utils-service.js'

export const mailService = {

    query,
    getMailById,
    saveMails,
    deleteMail,
    addMail,
    markMails,
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
        isActiv: false,
        isSent: true,
        sentAt: today.toISOString().substr(0, 10)
    }
    return mail
}

function addMail(mail) {
    // console.log('mail:', mail)
    
    
    gMails.unshift(mail)
    
    query();
    saveMails()
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

function markMails(){
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

    if (mails && mails.length) return mails;

    mails = [{
        id: utilsService.makeId(),
        user: 'dor@walla.com',
        subject: 'sport',
        body: 'Sport includes all forms of competitive physical activity or games which,1 through casual or organized participation, at least in part aim to use, maintain or improve physical ability and skills while providing enjoyment to participants, and in some cases, entertainment for spectators.[2] Sports can bring positive results to ones physical health. Hundreds of sports exist, from those between single contestants, through to those with hundreds of simultaneous participants, either in teams or competing as individuals. In certain sports such as racing, many contestants may compete, simultaneously or consecutively, with one winner; in others, the contest (a match) is between two sides, each attempting to exceed the other. Some sports allow a "tie" or "draw", in which there is no single winner; others provide tie-breaking methods to ensure one winner and one loser. A number of contests may be arranged in a tournament producing a champion. Many sports leagues make an annual champion by arranging games in a regular sports season, followed in some cases by playoffsSport is generally recognised as system of activities which are based in physical athleticism or physical dexterity, with the largest major competitions such as the Olympic Games admitting only sports meeting this definition,[3] and other organisations such as the Council of Europe using definitions precluding activities without a physical element from classification as sports.[2] However, a number of competitive, but non-physical, activities claim recognition as mind sports. The International Olympic Committee (through ARISF) recognises both chess and bridge as bona fide sports, and SportAccord, the international sports federation association, recognises five non-physical sports: bridge, chess, draughts (checkers), Go and xiangqi,[4][5] and limits the number of mind games which can be admitted as sports.[1]Sport is generally recognised as system of activities which are based in physical athleticism or physical dexterity, with the largest major competitions such as the Olympic Games admitting only sports meeting this definition,[3] and other organisations such as the Council of Europe using definitions precluding activities without a physical element from classification as sports.[2] However, a number of competitive, but non-physical, activities claim recognition as mind sports. The International Olympic Committee (through ARISF) recognises both chess and bridge as bona fide sports, and SportAccord, the international sports federation association, recognises five non-physical sports: bridge, chess, draughts (checkers), Go and xiangqi,[4][5] and limits the number of mind games which can be admitted as sports.[1]Sport is generally recognised as system of activities which are based in physical athleticism or physical dexterity, with the largest major competitions such as the Olympic Games admitting only sports meeting this definition,[3] and other organisations such as the Council of Europe using definitions precluding activities without a physical element from classification as sports.[2] However, a number of competitive, but non-physical, activities claim recognition as mind sports. The International Olympic Committee (through ARISF) recognises both chess and bridge as bona fide sports, and SportAccord, the international sports federation association, recognises five non-physical sports: bridge, chess, draughts (checkers), Go and xiangqi,[4][5] and limits the number of mind games which can be admitted as sports.[1]',
        isRead: false,
        isActiv: false,
        isSent: false,
        sentAt: '22-11-2019'
    },
    {
        id: utilsService.makeId(),
        user: 'zoe@gmail.com',
        subject: 'Suit',
        body: 'In 1993, the Renuar Group was founded by businessmen Eli Berkowitz and Yossi Brosh. A year later, in 1994, Serge Deri joined them, and since then he has served as Group CEO.In 1993, the Renuar Group was founded by businessmen Eli Berkowitz and Yossi Brosh. A year later, in 1994, Serge Deri joined them, and since then he has served as Group CEO.In 1993, the Renuar Group was founded by businessmen Eli Berkowitz and Yossi Brosh. A year later, in 1994, Serge Deri joined them, and since then he has served as Group CEO.',
        isRead: false,
        isActiv: false,
        isSent: false,
        sentAt: '12-4-2019'
    },
    {
        id: utilsService.makeId(),
        user: 'ben@hotmail.com',
        subject: 'gym',
        body: 'hello! my name is',
        isRead: false,
        isActiv: false,
        isSent: false,
        sentAt: '22-3-2019'
    },
    {
        id: utilsService.makeId(),
        user: 'ben@hotmail.com',
        subject: 'sport',
        body: 'hello! my name is dor and i like to run3hello! my name is dor and i like to run3hello! my name is dor and i like to run3hello! my name is dor and i like to run3',
        isRead: false,
        isActiv: false,
        isSent: false,
        sentAt: '23-1-2018'
    },
    {
        id: utilsService.makeId(),
        user: 'ben@hotmail.com',
        subject: 'sport',
        body: 'hello! my name is dor and i like to run3',
        isRead: false,
        isActiv: false,
        isSent: false,
        sentAt: '22-11-2017'
    },
    {
        id: utilsService.makeId(),
        user: 'ben@hotmail.com',
        subject: 'sport',
        body: 'hello! my name is dor and i like to run3',
        isRead: false,
        isActiv: false,
        isSent: false,
        sentAt: '22-11-2017'
    },
    {
        id: utilsService.makeId(),
        user: 'ben@hotmail.com',
        subject: 'sport',
        body: 'hello! my name is dor and i like to run3',
        isRead: false,
        isActiv: false,
        isSent: false,
        sentAt: '22-11-2017'
    },
    {
        id: utilsService.makeId(),
        user: 'ben@hotmail.com',
        subject: 'sport',
        body: 'hello! my name is dor and i like to run3',
        isRead: false,
        isActiv: false,
        isSent: false,
        sentAt: '22-11-2017'
    }
    ]
    return mails
}