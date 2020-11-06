
import { keepService } from '../services/keep-service.js'
import keepAdd from '../cmps/keep-add.cmps.js'
import keepList from '../cmps/keep-list.cmps.js'
import keepFilter from '../cmps/keep-filter.cmps.js'
import { eventBus } from '../../../services/event-bus.js'

export default {
    name: 'keep-app',
    template: `
    <section class="keep-app">
       <h1 class="keep-app-title">MissKeep</h1>
            <keep-filter  @filtered="setFilter"></keep-filter>

            <keep-add></keep-add>
            <keep-list :notes="notesToShow" 
            @colorChange="changeColorBgC" 
            @update="updateNote" 
            @pinned="updatePinNote" 
            @show-msg="emitMsg"
            @strike="strikeToDo">

            </keep-list>
      
    </section>
`,
    data() {
        return {
            notes: null,
            filterByTxt: null
        }
    },
    computed: {
        notesToShow() {

            if (!this.filterByTxt) return this.notes;
            const txt = this.filterByTxt.toLowerCase();
            return this.notes.filter(note => {
                return note.info.title.toLowerCase().includes(txt)

            })
        }
    },
    methods: {

        changeColorBgC(newColor, id) {
            keepService.changeBgColor(newColor, id)
                .then(res => {
                    this.notes = res;
                    console.log('this.notes', this.notes);
                });
        },
        setFilter(filterByTxt) {
            console.log('filterByTxt:', filterByTxt)

            this.filterByTxt = filterByTxt;
        },
        updateNote(noteId, info, type) {
            console.log('info', info);
            console.log('type', type);
            keepService.updateNote(noteId, info, type)
        },
        updatePinNote(noteId, pinInfo) {
            console.log(this.notes);
            keepService.pinNote(noteId, pinInfo)
        },
        strikeToDo(todoId, idx) {
            keepService.strikingToDo(todoId, idx)
        },
        emitMsg() {
            eventBus.$emit('show-msg', { txt: 'Deleted', type: 'Success' })
        },



    },

    components: {
        keepAdd,
        keepList,
        keepFilter,


    },
    created() {
        // console.log('keep app created');
        keepService.getNotes()
            .then(notes => this.notes = notes)
        // console.log(this.notes);

    }
}

