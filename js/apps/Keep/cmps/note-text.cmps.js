import noteColors from './note-colors.cmps.js'

export default {
    props: ['info','id'],
    template: `
        <section class="note-text">

            <h2>
               text {{info.txt}}
                id{{id}}
            </h2>

            <note-colors @colorChange="changeBColor"></note-colors>
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