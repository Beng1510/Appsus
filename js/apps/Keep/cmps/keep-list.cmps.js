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
                <li class="note" v-for="note in notes" :key="note.id"  >
                  
                   <component
                        :is="note.type"
                        :info="note.info" 
                        :id="note.id" 
                        >                      
                   </component>
                   
                  
                </li>
            </ul>
        </section>
    `,
    methods: {
        // getBgc(note) {
        //     return `background-color: ${note.style.backgroundColor}`;
        // },
        // changeBgColor(color, id) {
        //     this.$emit('changeBgc', color,id)
        // },
        onRemoveNote(noteId) {
            // console.log('noteId',noteId);
            keepService.removeNote(noteId)
                .then(res => {
                    console.log('res', res);
                    // eventBus.$emit('show-msg', 'Review Deleted')
                })
        }
    },
    components: {
        noteText,
        noteImg,
        noteTodos
    }
}