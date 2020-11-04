import { utilsService } from './utils-service.js'

export const keepService = {
    addNote,

}
var gNotes = []
console.log('gNotes',gNotes);


function addNote(note) {
    const newNote = _createNote(note);
console.log('newNote',newNote);

    gNotes.unshift(newNote);
   console.log('gNotes',gNotes);

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

var notes = [
    {
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "NoteImg",
        info: {
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
];

const NoteText = {
    props: ['info'],
    template: `
        <div class="row">
            <label>
                {{info.txt}}
                <input type="text" v-model="txt" @blur="reportVal" />
            </label>
        </div>
    `,
    data() {
        return {
            txt: '',
        }
    },
    methods: {
        reportVal() {
            this.$emit('setVal', this.txt)
        }
    }
}
const NoteImg = {
    props: ['info'],
    template: `
        <div class="row">
            <label>
                <input type="text" v-model="txt" @blur="reportVal" />
            <img class="book-img-details" :src="imgUrl" />
                {{info.title}}
            </label>
        </div>
    `,
    data() {
        return {
            imgUrl: '',
        }
    },
    methods: {
        reportVal() {
            this.$emit('setVal', this.txt)
        }
    }
}





