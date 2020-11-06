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
<div class="keep-list-pinned-notes">
          <h2>Pinned Notes</h2>  
<ul class="keep-list-pinned" >
                <li v-if=note.isPinned  class="note" v-for="note in notes" :key="note.id" :style="bgc(note)" >
                <span class="fas fa-thumbtack" v-if="isPinned"></span> 
                   <component
                        :is="note.type"
                        :info="note.info" 
                        :id="note.id" 
                       :isPinned="note.isPinned"
                        @changeBGC="changeColor"
                        @update="updateNote"
                        @delete="onRemoveNote"
                        @pinned="pinNote"
                        >                      
                    </component>
                    <!-- <button @click="onRemoveNote(note.id)">x</button> -->
                    <!-- <button @click="onEditNote(note.id)">?</button>
                    <input type="text" v-model="note.text" @blur="doneEdit(note)" v-show="note === activeEdit"> -->
                </li>  
            </ul>
</div>
<div class="keep-list-unpinned-notes">
<hr>
<ul class="keep-list-pinned" >
                <li v-if=!note.isPinned class="note" v-for="note in notes" :key="note.id" :style="bgc(note)" >
                
                   <component
                        :is="note.type"
                        :info="note.info" 
                        :id="note.id" 
                       :isPinned="note.isPinned"
                        @changeBGC="changeColor"
                        @update="updateNote"
                        @delete="onRemoveNote"
                        @pinned="pinNote"
                        >                      
                    </component>
                    <!-- <button @click="onRemoveNote(note.id)">x</button> -->
                    <!-- <button @click="onEditNote(note.id)">?</button>
                    <input type="text" v-model="note.text" @blur="doneEdit(note)" v-show="note === activeEdit"> -->
                </li>  
            </ul>
</div>

        </section>
    `,
    data() {
        return {
            isPinned: true
        }
    },
    methods: {
        bgc(note) {

            return `background-color: ${note.style.backgroundColor}`;
        },
        pinNote(id, pinInfo) {
           console.log('pinning');
        //    console.log('noteId',noteId);
        //    console.log('note',`${note}`);
           console.log('this.id',id);
           this.$emit('pinned', id, pinInfo);

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
        updateNote(noteId, info, type) {
            // console.log('info',info);
            // console.log('type',type);
            this.$emit('update', noteId, info, type);
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
