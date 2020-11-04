// import './long-text.js';
import { keepService } from '../services/keep-service.js'

export default {

    template: `
       <section class="keep-add">
            <h2> add and keep</h2>
            <input
        v-if="isTitle"
        v-model="title"
        type="text"
        autocomplete=off
        placeholder="Add title"
        class="add-title"
        />

        <input
        v-if="isTodos"
        v-model="todosLabel"
        type="text"
        autocomplete=off
        placeholder="Add label"
        class="add-lable"
        />

        <input 
        v-model="info"
        @keyup.enter="updateNoteInfo"
        type="text"
        ref="info"
        autocomplete=off
        :placeholder="[[placeholder]]"
        class="user-info"
        />

        <div class="icons flex">
            <label>
                <input type="radio" v-model="note.type" value="noteText" checked="true"/>  
                <span class="fas fa-font fa-lg selected"></span>
            </label>
            
            <label>
                <input type="radio" v-model="note.type" value="noteImg" />  
                <span class="far fa-image fa-lg"></span>
            </label>

           

            <label>
                <input type="radio" v-model="note.type" value="noteTodos" /> 
                <span class="fas fa-list fa-lg"></span>
            </label>
        </div>
   
           
        </section>
    `,
    data() {
        return {
            note: { type: 'noteText' },
            placeholder: 'What\'s on your mind...',
            info: '',
            isTodos: false,
            todosLabel: '',
            isTitle: false,
            title: ''
        }
    },
    computed: {


    },
    methods: {
        updateNoteInfo() {
            if (this.note.type === 'noteText') this.note.info = { text: this.info }

            else if (this.note.type === 'noteImg') {
                this.note.info = { url: this.info, title: this.title }

            } else if (this.note.type === 'noteTodos') {
                let todos = this.info.split(',');

                var todosObj = todos.map(todo => {
                    return { text: todo, doneAt: null }
                });
                this.note.info = { todos: todosObj, label: this.todosLabel };
            }
            keepService.addNote(this.note)
                .then(res => {
                    console.log('res',res);
                    console.log('this.info',this.info);
                    console.log('this.todosLabel',this.todosLabel);
                    this.info = '';
                    this.title = '';
                    this.todosLabel = '';
                    console.log('this.info',this.info);
                    console.log('this.todosLabel',this.todosLabel);
                })
        },
    },
    created() {
        console.log('keep add created');

    }
}