import { mailService } from '../service/mail-service.js'


export default {
    template: `
    <section class="mail-detail">
       <h1>New Mail</h1>
          
        <div>

            <header class="head-mail">
            <h2>Mail send by: {{mail.user}}</h2>
            <h3>subject: {{mail.subject}},</h3>
            </header>

            <main class="main-mail">
                <p>{{mail.body}}</p>
            </main>

            <footer class="footer-mail">
                <button @click="emitDelete(mail.id)">
                    <img src="/js/asset/icons/delete.png" >
                </button>
            </footer>

        </div>

    </section>
 `,
    data() {
        return {
            mail: null,
        }
    },
    methods:{
        emitDelete(id){
            console.log('id:', id)
            this.$emit('delete', id)
            mailService.deleteMail(id)
    
        }
    },
    created() {
        const  mailId = this.$route.params.mail;
    
        this.mail = mailService.getMailById(mailId)
        

    },
   

}
