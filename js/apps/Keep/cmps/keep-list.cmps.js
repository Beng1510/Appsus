// import './book-preview.js';
// import keepAdd from './keep-add.cmps.js'
import { keepService } from '../services/keep-service.js'
import noteText from './note-text.cmps.js'
import noteImg from './note-img.cmps.js'
import noteTodos from './note-todos.cmps.js'

export default {
    props: ['notes'],
    name: 'keep-list',
    template: `

        <section class="keep-list">
                 <!-- <keep-add></keep-add> -->

            <ul >
                <li class="note" v-for="note in notes" :key="note.id" :style="bgc(note)" >
                  
                   <component
                        :is="note.type"
                        :info="note.info" 
                        :id="note.id" 
                        @changeBGC="changeColor"
                        >                      
                    </component>
                    <button @click="onRemoveNote(note.id)">x</button>
                    <!-- <button @click="onEditNote(note.id)">?</button>
                    <input type="text" v-model="note.text" @blur="doneEdit(note)" v-show="note === activeEdit"> -->
                </li>
            </ul>
        </section>
    `,
    methods: {
        bgc(note) {

            return `background-color: ${note.style.backgroundColor}`;
        },
        onRemoveNote(noteId) {
            // console.log('noteId',noteId);
            console.log('noteId', noteId);
            keepService.removeNote(noteId)
                .then(res => {
                    console.log('res', res);
                    // eventBus.$emit('show-msg', 'Review Deleted')
                })
        },
        onEditNote(noteId) {
            keepService.editNote(noteId)
        },

        changeColor(color, id) {
            console.log('checking color', color);
            console.log('checking id', id);
            this.$emit('colorChange', color, id)
            // console.log('this.id',this.id);
            // console.log('this.note',this.note);
            // console.log('this.id',this.note.id);
        }
    },
    components: {
        noteText,
        noteImg,
        noteTodos
    }
}
