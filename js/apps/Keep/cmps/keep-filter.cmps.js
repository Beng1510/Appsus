import { keepService } from '../services/keep-service.js'


export default {
    props: ['notes'],
    template: `
    <section class="keep-filter">
    <form @submit.prevent="emitFilter">
            
            <input type="text" v-model="filterByTxt" placeholder="Search here" @input="emitFilter" />
    <!-- <input type="text" v-model="filterObj.filterByTxt" placeholder="Search Email by subject" @input="emitFilter"> -->
           
            <button>Apply Filter</button>
            
        </form>
    </section>
    `,
    data() {
        return {
        
             filterByTxt: ''
            
        }
    },
    methods: {
        emitFilter() {
            console.log('emitting');
            // this.$emit('filtered', this.filterByText)
            this.$emit('filtered', this.filterByTxt)
        },
    },
    components: {
        // mailPreview,
    }

}