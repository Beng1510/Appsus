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
                <li class="note" v-for="note in notes" :key="note.id">
                  
                   <component
                        :is="note.type"
                        :info="note.info" 
                        :id="note.id" 
                        @colorChange="change"
                        >                      
                   </component>
                   
                   <button @click="onRemoveNote(note.id)">x</button>
                </li>
            </ul>
        </section>
    `,
    methods: {
       
        onRemoveNote(noteId) {
            // console.log('noteId',noteId);
            keepService.removeNote(noteId)
                .then(res => {
                    console.log('res', res);
                    // eventBus.$emit('show-msg', 'Review Deleted')
                })
        },
        change(color) {
            console.log('checking');
            console.log('checking color',color);
            console.log('this.id',this.id);
        }
    },
    components: {
        noteText,
        noteImg,
        noteTodos
    }
}
