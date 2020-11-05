import noteColors from './note-colors.cmps.js'

export default {
    props: ['info', 'id'],
    template: `
        <section class="note-todos">
            <div class="note-todos-content"> 
                <div class="todos">
                    <h3>{{info.title}}</h3>
                         
                        <div class="todo" v-for="todos in info.todos">
                            <p>*{{todos.txt}}</p>
                        </div>
                </div>
            </div>
           
            <div class="note-control-panel">
                    
                    <span @click="editNote" class="fas fa-edit"></span> 
                    <span @click="onRemoveNote" class="fas fa-trash-alt"></span>
                    <span @click="colorEdit" class="fas fa-palette info colors dropdown"></span> 
                    <note-colors v-if="isColorEdit" @colorChange="changeBColor"></note-colors>
                    
                    <section v-if="isEdit" class="edit-note">
                        <input v-model="newText"  type="text" placeholder="Edit Title"/>
                            <div> 
                                <button @click="updateNote">Update</button>
                                <button @click="editNote">Cancel</button>
                            </div>
                    </section>
                </div>

        </section>
`,
data() {
    return {
        isEdit: false,
        isColorEdit: false,
        newText: this.info.txt,
        
        // placeholder: 'What\'s on your mind...',
        

    }
},
methods: {
    changeBColor(color) {
        console.log('color:', color, 'this.id', this.id);
        this.$emit('changeBGC', color, this.id)
    },
    updateNoteInfo(note) {
        console.log(note);
    },
    editNote() {
        this.isEdit = !this.isEdit;
    },
    updateNote() {
        this.$emit('update', this.id, this.newText, 'noteText')
        this.isEdit = !this.isEdit;
    },
    onRemoveNote(){
        this.$emit('delete', this.id)
    },
    colorEdit() {
        this.isColorEdit = !this.isColorEdit;
    }
},
components: {
    noteColors
},
}