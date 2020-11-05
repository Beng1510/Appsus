import noteColors from './note-colors.cmps.js'

export default {
    props: ['info', 'id'],
    template: `
        <section class="note-text">

            <h2>
               text {{info.txt}}
                id{{id}}
            </h2>

            <note-colors @colorChange="changeBColor"></note-colors>
            <button>?</button>
            <input type="text" placeholder="What\'s on your mind..."
            @keyup.enter="updateNoteInfo(note)"  class="user-info"
        />
        <!-- <input type="text" placeholder="whats up?"> -->

        </section>
`,
    data() {
        return {

            // placeholder: 'What\'s on your mind...',
            activeEdit: null

        }
    },
    methods: {
        changeBColor(color) {
            console.log('color:', color, 'this.id', this.id);
            this.$emit('changeBGC', color, this.id)
        },
        updateNoteInfo(note) {
            console.log(note);
        }
    },
    components: {
        noteColors
    },


}