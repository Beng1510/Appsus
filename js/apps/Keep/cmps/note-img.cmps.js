import noteColors from './note-colors.cmps.js'

export default {
    props: ['info', 'id'],
    template: `
        <section class="note-img">

            <h3> 
                {{info.title}}
            </h3>

            <img :src="info.url" :title="info.title">
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