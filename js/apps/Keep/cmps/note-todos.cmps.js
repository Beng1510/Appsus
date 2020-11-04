
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

        </section>
`,

}