// import './book-preview.js';
import keepAdd from './keep-add.cmps.js'

export default {
    props: ['notes'],
    template: `

        <section class="keep-list">
                 <keep-add></keep-add>

            <ul >
                <li v-for="(note, idx) in notes" :key="note.id" >
                   TYPE:{{note.type}}
                   INFO: {{note.info}}

                   <button @click="onRemoveNote(note.id)">x</button>
                </li>
            </ul>
        </section>
    `,
    methods: {
        onRemoveNote(noteId) {
            keepService.removeNote(noteId, this.note.id)
                .then(res => {
                    console.log('res', res);
                    // eventBus.$emit('show-msg', 'Review Deleted')
                })
        }
    },
    components: {
        keepAdd  
    }
}