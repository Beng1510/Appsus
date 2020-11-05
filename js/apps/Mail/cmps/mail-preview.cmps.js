import mailPreview from './mail-preview.cmps.js'



export default {
    props:['mail'],
    template: `
    <section class="mail-preview" >
        
            <h2>{{mail.subject}}</h2>
            <h4>{{mail.body}}</h4>
            <button>📧</button>
            <button  @click.stop="emitDelete(mail.id)" >
                    <img src="/js/asset/icons/delete.png" >
            </button>
        
     </section>
    `,
    methods:{
        emitDelete(id){        
            this.$emit('delete', id)
        }
    },
    

    
}