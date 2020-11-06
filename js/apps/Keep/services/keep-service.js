import { utilsService } from './utils-service.js'

const NOTES_DB = 'noteDb'

export const keepService = {
    addNote,
    getNotes,
    removeNote,
    changeBgColor,
    editNote,
    updateNote,
    pinNote

}

var gNotes;

console.log('gNotes before', gNotes);

// function getNotes() {

//     utilsService.storeToStorage(NOTES_DB, gNotes)
//     return Promise.resolve(gNotes);
// }


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
    const newNote = _createNote(note);
    console.log('newNote', newNote);

    gNotes.unshift(newNote);
    console.log('gNotes after add', gNotes);
    utilsService.storeToStorage(NOTES_DB, gNotes)
    return Promise.resolve();
}


function _createNote(noteDetailes) {
    return {
        id: utilsService.makeId(),
        type: noteDetailes.type,
        isPinned: noteDetailes.isPinned || false,
        info: noteDetailes.info,
        style: noteDetailes.style || { backgroundColor: '#BCD4E6' }
    }
}

function removeNote(noteId) {

    const noteIdx = gNotes.findIndex((note) => {
        return noteId === note.id
    })
    gNotes.splice(noteIdx, 1)
    return Promise.resolve(gNotes)
}

function editNote(noteId, newTxt) {
    const noteIdx = gNotes.findIndex((note) => {
        return noteId === note.id
    })
    gNotes[noteIdx].info.title = newTxt
    return Promise.resolve(gNotes)
}


function changeBgColor(color, id) {
    let note = findNoteById(id);

    console.log('note', note);
    console.log('color', color);

    note.style.backgroundColor = color;

    console.log('note.style.backgroundColor', note.style.backgroundColor);

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
                title: "Fullstack Me Baby!"
            },
            style: {
                backgroundColor: "#BCD4E6"
            }
        },
        {
            type: "noteText",
            isPinned: false,
            info: {
                title: "Peace and Love!"
            },
            style: {
                backgroundColor: "#BCD4E6"
            }
        },
        {
            type: "noteImg",
            isPinned: false,
            info: {
                url: "http://coding-academy.org/books-photos/2.jpg",
                title: "Me playing Mi"
            },
            style: {
                backgroundColor: "#BCD4E6"
            }
        },
        {
            type: "noteTodos",
            isPinned: true,
            info: {
                title: "How was it:",
                todos: [
                    { txt: "Do that", doneAt: null },
                    { txt: "Do this", doneAt: 187111111 }
                ]
            },
            style: {
                backgroundColor: "#BCD4E6"
            }
        },
        {
            type: "noteImg",
            isPinned: false,
            info: {
                url: "http://coding-academy.org/books-photos/3.jpg",
                title: "Finding Nemo"
            },
            style: {
                backgroundColor: "#BCD4E6"
            }
        },
    ].map(formatNotes);
    return defaultNotes
}
// var gNotes = utilsService.loadFromStorage(NOTES_DB) ? utilsService.loadFromStorage(NOTES_DB) : defaultNotes;
function formatNotes(rawNotes) {

    return {
        id: utilsService.makeId(),
        type: rawNotes.type,
        info: rawNotes.info,
        style: rawNotes.style,
        isPinned: rawNotes.isPinned,
    }
}


function updateNote(noteId, info, type) {
    const note = findNoteById(noteId);
    if (type === 'noteText') {
        note.info.title = info;
    } else if (type === 'noteImg') {
        note.info.url = info;

    } else if (type === 'noteTodos') {
        note.info.todos = info
    }
    utilsService.storeToStorage(NOTES_DB, gNotes)
}

function pinNote(noteId, pinInfo) {
    const note = findNoteById(noteId);
    note.isPinned = pinInfo
    console.log('note.isPinned',note.isPinned);
    utilsService.storeToStorage(NOTES_DB, gNotes)
}