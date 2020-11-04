import { utilsService } from './utils-service.js'

const NOTES_DB = 'notedDb'

export const keepService = {
    addNote,
    getNotes,
    removeNote
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
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
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

function removeNote(noteId) {
    return Promise.resolve(
        getnoteIdxById(noteId)
            .then(idx => {
                gNotes[idx].splice(idx, 1);
                utilsService.storeToStorage(BOOKS_DB, gBooks);
            })
            )
}

function getnoteIdxById(id) {
    return Promise.resolve(gNotes.findIndex(note => note.id === id))
}




