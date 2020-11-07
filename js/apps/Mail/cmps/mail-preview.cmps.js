import mailPreview from './mail-preview.cmps.js'




export default {
    props:['mail'],
    template: `
    <section class="mail-preview " >
         
   
        
        <h2 class="itemsub">{{mail.subject}}</h2>
        <p class="itemuser">{{mail.user}}</p>
        
        <p class="longTxt" >{{textForPreview}}</p>
        <p class="longdate">{{mail.sentAt}}</p> 
        
        
        
        <!-- <input class="longcheck" type="checkbox"  @click.stop="emitActiv(mail.id)" />  -->
        <div class="starActiv" >
            <span class="far fa-star " @click.stop="emitActiv(mail.id)">  </span>
        </div>   
        
        <div class="delIcon" >
            <span  class="fas fa-trash-alt" @click.stop="emitDelete(mail.id)"> </span>
        </div> 
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
            
            this.$emit('delete', id)
        },
        emitActiv(id){        
            this.$emit('activ', id)
        },
      
    },
    computed:{
        textForPreview() {
            return this.mail.body.slice(0, 40) + '...'
        },
    },
    components: {
       
    }

    
}