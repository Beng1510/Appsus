import mailPreview from './mail-preview.cmps.js'




export default {
    props:['mail'],
    template: `
    <section class="mail-preview " >
         

         
            <h2 class="itemsub">{{mail.subject}}</h2>
            <p class="itemuser">{{mail.user}}</p>
            
            <p class="longTxt" >{{textForPreview}}</p>
            <p class="longdate">{{mail.sentAt}}</p> 

            <div class="star-icon">
                <span class="far fa-star " @click.stop="emitActiv(mail.id)"></span>
            </div>

            
                <!-- <input class="longcheck" type="checkbox"  @click.stop="emitActiv(mail.id)" />  -->
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
        },
        emitActiv(id){        
            console.log('iddddddd:', id)
            this.$emit('activ', id)
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