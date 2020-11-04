
import { keepService } from '../services/keep-service.js'
import keepAdd from '../cmps/keep-add.cmps.js'
import keepList from '../cmps/keep-list.cmps.js'

export default {
    name: 'keep-app',
    template: `
    <section class="keep-app">
       <h1>Keep Page</h1>
       <keep-add></keep-add>
       <!-- <keep-list :notes="notesToShow"  @colorChange="chngeBkgColor"></keep-list> -->
       <keep-list :notes="notesToShow"></keep-list>
       <!-- <keep-add :notes="notesToShow"></keep-add> -->



    </section>
`,
    data() {
        return {
            notes: null,

        }
    },
    computed: {
        notesToShow() {
            console.log('this.notes',this.notes);
            return this.notes
        },
        // chngeBkgColor(newColor, id) {
        //     console.log('newColor',newColor);
        //     keepService.changeBkgColor(newColor, id)
        //         .then(res => {
        //             this.notes = res;
        //             console.log('this.notes',this.notes);
        //         });
        // },
    },
    components: {
        keepAdd,
        keepList

    },
    created() {
        console.log('keep app created');
        keepService.getNotes()
            .then(notes => this.notes = notes)
            
    },
}

