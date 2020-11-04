import { utilsService } from './utils-service.js'

const NOTES_DB = 'noteDb'

export const keepService = {
    addNote,
    getNotes,
    removeNote,
    //  changeBkgColor

}

const defaultNotes = [
    {
        type: "noteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "noteText",
        isPinned: false,
        info: {
            txt: "Peace and Love!"
        }
    },
    {
        type: "noteImg",
        info: {
            url: "http://coding-academy.org/books-photos/2.jpg",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#006D77"
        }
    },
    {
        type: "noteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
];

var gNotes = utilsService.loadFromStorage(NOTES_DB) ? utilsService.loadFromStorage(NOTES_DB) : defaultNotes;

console.log('gNotes', gNotes);

function getNotes() {
    utilsService.storeToStorage(NOTES_DB, gNotes)
    return Promise.resolve(gNotes);
}

function addNote(note) {
    const newNote = _createNote(note);
    console.log('newNote', newNote);

    gNotes.unshift(newNote);
    console.log('gNotes', gNotes);
    utilsService.storeToStorage(NOTES_DB, gNotes)
    return Promise.resolve();
}


function _createNote(noteDetailes) {
    return {
        id: utilsService.makeId(),
        type: noteDetailes.type,
        isPinned: noteDetailes.isPinned || false,
        info: noteDetailes.info,
        style: noteDetailes.style || { backgroundColor: '#80ED99' }
    }
}

// function removeNote(noteId) {
//     return Promise.resolve(
//         getNoteIdxById(noteId)
//             .then(idx => {
//                 console.log('idx',idx);
//                 console.log('gNotes',gNotes);

//                 gNotes[idx].splice(idx, 1);
//                 utilsService.storeToStorage(BOOKS_DB, gBooks);
//             })
//             )
// }

// function getNoteIdxById(id) {
//     return Promise.resolve(gNotes.findIndex(note => note.id === id))
// }


function removeNote(noteId) {

    const noteIdx = gNotes.findIndex((note) => {
        return noteId === note.id
    })
    gNotes.splice(noteIdx, 1)
    return Promise.resolve(gNotes)
}


// function changeBkgColor(color, id) {
//     let note = findNoteById(id);
//     console.log('note',note);
//     console.log('color',color);
//     note.style.backgroundColor = color;
//     console.log('note.style.backgroundColor',note.style.backgroundColor);
//     utilsService.storeToStorage(NOTES_DB, gNotes)
//     return Promise.resolve(notesDB);
// }
// function findNoteById(noteId) {
//     return gNotes.find(note => note.id === noteId);
// }

