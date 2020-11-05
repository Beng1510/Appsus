import noteColors from './note-colors.cmps.js'

export default {
    props: ['info', 'id'],
    template: `
        <section class="note-todos">
            <div class="note-todos-content"> 
                <div class="todos">
                    <h3>{{info.label}}</h3>
                         <div class="todo" v-for="todos in info.todos">
                            <p>*{{todos.txt}}</p>
                         </div>
                </div>
            </div>
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