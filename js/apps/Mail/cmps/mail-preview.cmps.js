import mailPreview from './mail-preview.cmps.js'




export default {
    props:['mail'],
    template: `
    <section class="mail-preview" >
        
            <h2>{{mail.subject}}</h2>
            
            <p class="longTxt" >{{textForPreview}}</p>
            <p>{{mail.sentAt}}</p> 
            <button>📧</button>
            <button  @click.stop="emitDelete(mail.id)" >
                    <img src="/js/asset/icons/delete.png" >
            </button>
        
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