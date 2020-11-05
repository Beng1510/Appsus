import mailPreview from './mail-preview.cmps.js'




export default {
    props:['mail'],
    template: `
    <section class="mail-preview " >
         

         
            <h2 class="itemsub">{{mail.subject}}</h2>
            <p class="itemuser">{{mail.user}}</p>
            
            <p class="longTxt" >{{textForPreview}}</p>
            <p class="longdate">{{mail.sentAt}}</p> 
            
            <span  class="fas fa-trash-alt" @click.stop="emitDelete(mail.id)"> </span>

            <!-- <button  @click.stop="emitDelete(mail.id)" class="itemgar"> -->
                <!-- <img src="/js/asset/icons/delete.png" > -->

            <!-- </button> -->
            
     </section>
    `,
    dtat(){
        return{
            hideText: true,
        }
    },
    methods:{
        emitDelete(id){        
            console.log('iddddddd:', id)
            this.$emit('delete', id)
        }
    },
    computed:{
        textForPreview() {
            return this.mail.body.slice(0, 40) + '...'
        },
    },
    components: {
       
    }

    
}