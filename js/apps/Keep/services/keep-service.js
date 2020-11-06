import { utilsService } from './utils-service.js'

const NOTES_DB = 'noteDb'

export const keepService = {
    addNote,
    getNotes,
    removeNote,
    changeBgColor,
    updateNote,
    pinNote,
    convertYouTube

}

var gNotes;

function getNotes() {
    var notes = utilsService.loadFromStorage(NOTES_DB)
    if (!notes || notes.length === 0) {
        notes = createDefaultNotes()
        // console.log('notes',notes);
        utilsService.storeToStorage(NOTES_DB, notes)
    }
    gNotes = notes
    console.log('gNotes after', gNotes);
    return Promise.resolve(gNotes);
}


function addNote(note) {
    const newNote = formatNotes(note);
    console.log('newNote', newNote);

    gNotes.unshift(newNote);
    console.log('gNotes after add', gNotes);
    utilsService.storeToStorage(NOTES_DB, gNotes)
    return Promise.resolve();
}



function removeNote(noteId) {

    const noteIdx = gNotes.findIndex((note) => {
        return noteId === note.id
    })
    gNotes.splice(noteIdx, 1)
    utilsService.storeToStorage(NOTES_DB, gNotes)
    return Promise.resolve(gNotes)
}




function changeBgColor(color, id) {

    let note = findNoteById(id);
    note.style.backgroundColor = color;
    utilsService.storeToStorage(NOTES_DB, gNotes)
    return Promise.resolve(gNotes);
}


function findNoteById(noteId) {
    return gNotes.find(note => note.id === noteId);
}



function createDefaultNotes() {

    let defaultNotes = [
        {
            type: "noteText",
            isPinned: true,
            info: {
                title: '\"Toto, I\'ve a feeling we\'re not in Kansas anymore\"'
            },
            style: {
                backgroundColor: "#EDDCD2"
            }
        },
        {
            type: "noteText",
            isPinned: false,
            info: {
                title: '\"No matter what anybody tells you, words and ideas can change the world\"'
            },
            style: {
                backgroundColor: "#EDDCD2"
            }
        },
        {
            type: "noteImg",
            isPinned: false,
            info: {
                url: "https://picsum.photos/180/120?random=2",
                title: "Photography is not Dead"
            },
            style: {
                backgroundColor: "#BCD4E6"
            }
        },
        {
            type: "noteTodos",
            isPinned: false,
            info: {
                title: "What to Do:",
                todos: [
                    { id: utilsService.makeId(3), txt: "Code", doneAt: null },
                    { id: utilsService.makeId(3), txt: "Code Some More", doneAt: 187111111 },
                    { id: utilsService.makeId(3), txt: "And a Bit More", doneAt: 187111111 }
                ]
            },
            style: {
                backgroundColor: "#FAD2E1"
            }
        },
        {
            type: "noteImg",
            isPinned: false,
            info: {
                url: "https://picsum.photos/180/120?random=1",
                title: "Through the Looking Glass"
            },
            style: {
                backgroundColor: "#BCD4E6"
            }
        },
        {
            type: "noteVideo",
            isPinned: false,
            info: {
                url: "https://www.youtube.com/embed/ggFKLxAQBbc",
                title: "Enter the Matrix"
            },
            style: {
                backgroundColor: "#BCD4E6"
            }
        },
    ].map(formatNotes);
    return defaultNotes
}
// var gNotes = utilsService.loadFromStorage(NOTES_DB) ? utilsService.loadFromStorage(NOTES_DB) : defaultNotes;
// function formatNotes(rawNotes) {

//     return {
//         id: utilsService.makeId(),
//         type: rawNotes.type,
//         info: rawNotes.info,
//         style: rawNotes.style,
//         isPinned: rawNotes.isPinned,
//     }
// }

function formatNotes(rawNotes) {
    return {
        id: utilsService.makeId(),
        type: rawNotes.type,
        isPinned: rawNotes.isPinned || false,
        info: rawNotes.info,
        style: rawNotes.style || { backgroundColor: '#BCD4E6' }
    }
}


function updateNote(noteId, info, type) {
    const note = findNoteById(noteId);
    if (type === 'noteText') {
        note.info.title = info;
    } else if (type === 'noteImg') {
        note.info.url = info;
    } else if (type === 'noteVideo') {
        note.info.url = info;
    } else if (type === 'noteTodos') {
        note.info.todos = info
    }
    utilsService.storeToStorage(NOTES_DB, gNotes)
}
function strikingToDo(date, id) {
const note = findNoteById(noteId)
const toDo = findToDoById()
}

function findToDoById(noteId) {
    return gNotes.find(note => note.id === noteId);
}


function pinNote(noteId, pinInfo) {
    const note = findNoteById(noteId);
    note.isPinned = pinInfo
    console.log('note.isPinned', note.isPinned);
    utilsService.storeToStorage(NOTES_DB, gNotes)
}


function convertYouTube(url) {

    const videoId = getVideoId(url);
    console.log('Video ID:', videoId)

    const iframeMarkup = 'https://www.youtube.com/embed/' + videoId;
    return iframeMarkup

}

function getVideoId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}
