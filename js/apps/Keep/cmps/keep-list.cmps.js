// import './book-preview.js';
import keepAdd from './keep-add.cmps.js'
import { keepService } from '../services/keep-service.js'

export default {
    props: ['notes'],
    name: 'keep-list',
    template: `

        <section class="keep-list">
                 <keep-add></keep-add>

            <ul >
                <li v-for="note in notes" :key="note.id" >
                   TYPE:{{note.type}}
                   INFO: {{note.info}}
                   INFO: {{note.info}}
                   ID: {{note.id}}
                   STYLE: {{note.style}}
                   <component :is="note.type"
                            :info="note.info" 
                            @setVal="setAns($event, idx)" />
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
        }
    },
    components: {
        keepAdd
    }
}


const noteText = {
    props: ['info'],
    template: `
        <div class="row">
            <h2>
                {{info.txt}}
                
            </h2>
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