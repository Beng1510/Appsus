import noteColors from './note-colors.cmps.js'

export default {
    props: ['info', 'id'],
    template: `
        <section class="note-img">

            <h4 class="note-img-title"> 
                {{info.title}}
            </h4>

            <img :src="info.url" :title="info.title">

            <!-- <div class="note-control-panel"> -->
                    <!-- <button @click="editNote">?</button> -->
                    <!-- <button @click="onRemoveNote()">xx</button> -->

                    <!-- <span @click="editNote" class="fas fa-edit"></span> -->
                    <!-- <span @click="onRemoveNote" class="fas fa-trash-alt"></span> -->
                    <!-- <span @click="colorEdit" class="fas fa-palette info colors dropdown"></span> -->
                    <!-- <note-colors v-if="isColorEdit" @colorChange="changeBColor"></note-colors> -->
                    
                    <!-- <section v-if="isEdit" class="edit-note">
                        <input v-model="newText"  type="text"/>
                            <div> 
                                <button @click="updateNote">Update</button>
                                <button @click="editNote">Cancel</button>
                            </div>
                    </section>
                </div> -->
           
        </section>
`,
methods: {
    changeBColor(color) {
        console.log('color:',color,'this.id',this.id);
        this.$emit('changeBGC', color, this.id)
    }
},
components: {
    noteColors
},
}