
import { keepService } from '../services/keep-service.js'
import keepAdd from '../cmps/keep-add.cmps.js'
import keepList from '../cmps/keep-list.cmps.js'

export default {
    name: 'keep-app',
    template: `
    <section class="keep-app">
       <h1>Keep Page</h1>
       <keep-add></keep-add>
       <keep-list :notes="notesToShow" @colorChange="changeColorBgC">></keep-list>
      
    </section>
`,
    data() {
        return {
            notes: [],

        }
    },
    computed: {
        notesToShow() {
            console.log('this.notes', this.notes);
            return this.notes
        },
    },
    methods: {

        changeColorBgC(newColor, id) {
            console.log('newColor', newColor);
            console.log('is it id', id);
            keepService.changeBkgColor(newColor, id)
            .then(res => {
            this.notes = res;
            console.log('this.notes',this.notes);
            });
        }
    },

    components: {
        keepAdd,
        keepList

    },
    created() {
        console.log('keep app created');
        keepService.getNotes()
            .then(notes => this.notes = notes)
            console.log(this.notes);

    },
}

