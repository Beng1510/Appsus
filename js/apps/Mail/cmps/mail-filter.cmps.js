import { mailService } from '../service/mail-service.js'


export default {
    props: ['mails'],
    template: `
    <section class="mail-filter">
    <form @submit.prevent="emitFilter">
            <label>   <i class="fas fa-search"></i>
                <input type="text" v-model="filterObj.filterByTxt" placeholder="Search..." @input="emitFilter"  class="fas fa-search">
            </label>
            
            <select v-model="filterObj.filterByRead">
                    <option value="all">All</option>
                    <option value="read">Read</option>
                    <option value="unread">Unread</option>
            </select>

            <button>Apply Filter</button>
            
        </form>
    </section>
    `,
    data() {
        return {
        filterObj: { 
            filterByTxt: '' ,
            filterByRead:'all'
        }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('filtered', JSON.parse(JSON.stringify(this.filterObj)))
        },
    },
    components: {
        // mailPreview,
    }

}