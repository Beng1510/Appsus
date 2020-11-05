
import { keepService } from '../services/keep-service.js'
import keepAdd from '../cmps/keep-add.cmps.js'
import keepList from '../cmps/keep-list.cmps.js'
import keepFilter from '../cmps/keep-filter.cmps.js'

export default {
    name: 'keep-app',
    template: `
    <section class="keep-app">
       <h1>Keep Page</h1>
       <keep-filter  @filtered="setFilter"></keep-filter>
       <keep-add></keep-add>
       <keep-list :notes="notesToShow" @colorChange="changeColorBgC" @update="updateNote">>

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
            // return this.notes
            console.log('this.filterByTxt:', this.filterByTxt)
            console.log('this.notes:', this.notes)

            if (!this.filterByTxt) return this.notes;
            const txt = this.filterByTxt.toLowerCase();
            console.log('txt:', txt)
            console.log('this.notes:', this.notes)

            return this.notes.filter(note => {
                console.log('note',note.info.txt);

                return note.info.txt.toLowerCase().includes(txt) 

    
        })
    }
},
    methods: {

        changeColorBgC(newColor, id) {
            keepService.changeBgColor(newColor, id)
            .then(res => {
            this.notes = res;
            console.log('this.notes',this.notes);
            });
        },
        setFilter(filterByTxt) {
            console.log('filterByTxt:', filterByTxt)

            this.filterByTxt = filterByTxt;
        },
        updateNote(noteId, info, type) {
            console.log('info',info);
            console.log('type',type);
           keepService.updateNote(noteId, info, type)
        },

        // setFilterNotes(filterBy) {
        //     console.log('in hereeee');
        //     this.filterBy = filterBy;
        //     // getNotes();
        //     console.log('this.filterBy');
        //     // this.getNotes();
        // },
        
    },

    components: {
        keepAdd,
        keepList,
        keepFilter

    },
    created() {
        // console.log('keep app created');
        keepService.getNotes()
            .then(notes => this.notes = notes)
            // console.log(this.notes);

    }
}

