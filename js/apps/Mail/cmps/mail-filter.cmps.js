import { mailService } from '../service/mail-service.js'


export default {
    props: ['mails'],
    template: `
    <section class="mail-filter">
    <form @submit.prevent="emitFilter " >
       <div class="flex column justify-center">
            <label>   <i class="fas fa-search"></i>
                <input type="text" v-model="filterObj.filterByTxt" placeholder="Search..." @input="emitFilter"  class="fas fa-search">
            </label>
            
            <!-- <select v-model="filterObj.filterByRead" >
                    <option value="all" >All</option>
                    <option value="read" >Read</option>
                    <option value="unread" >Unread</option>
            </select> -->
            <!-- <div class="filter-read">
                <label>All<input type="radio" v-model="filterObj.filterByRead" @change="emitFilter"  class="all" value="all"></label>
                <label>Read<input type="radio" v-model="filterObj.filterByRead" @change="emitFilter"  class="read" value="read"></label>
                <label>Unread<input type="radio" v-model="filterObj.filterByRead" @change="emitFilter"  class="unread" value="unread"></label>
              
            </div> -->
            <div class="flex filter-read">
                <label class="containerChack">All<input type="radio" v-model="filterObj.filterByRead" @change="emitFilter"  class="all" value="all"><span class="checkmark" checked="checked"></span></label>
                <label class="containerChack" >Read<input type="radio" v-model="filterObj.filterByRead" @change="emitFilter"  class="read" value="read"><span class="checkmark"></span></label>
                <label class="containerChack">Unread<input type="radio" v-model="filterObj.filterByRead" @change="emitFilter"  class="unread" value="unread"><span class="checkmark"></span></label>
              
            </div>
        </div>
            <!-- <button >Apply Filter</button> -->
            
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
            console.log('this.filterObjoneone:', this.filterObj)
            this.$emit('filtered', JSON.parse(JSON.stringify(this.filterObj)))
        },
    },
    components: {
        // mailPreview,
    },
    created(){
        // this.emitFilter()
    }

}