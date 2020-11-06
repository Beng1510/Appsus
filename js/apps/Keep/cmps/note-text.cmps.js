import noteColors from './note-colors.cmps.js'

export default {
    props: ['info', 'id'],
    template: `
        <section  class="note-text-container">
           

            <div class="note-text-content">
                <p class="note-text-title">{{info.title}}</p>
            </div>
            <span @click="toggleControls" class="fas fa-font fa-lg text-controls"></span>

            <div v-if="isControlsShown" class="note-control-panel"> 

            
                    <!-- <button @click="editNote">?</button> -->
                    <!-- <button @click="onRemoveNote()">xx</button> -->
                    
                    <span @click="emitPinNote" class="fas fa-thumbtack"></span>
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
            isControlsShown: false,
           
            
            // placeholder: 'What\'s on your mind...',
            

        }
    },
    methods: {
        emitPinNote() {
            console.log('noteid pinned',this.id);
            
            this.isPinned = !this.isPinned;
            this.$emit('pinned', this.id, this.isPinned)
        },
        changeBColor(color) {
            console.log('color:', color, 'this.id', this.id);
            this.$emit('changeBGC', color, this.id)
        },
        toggleControls() {
            this.isControlsShown = !this. isControlsShown;
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