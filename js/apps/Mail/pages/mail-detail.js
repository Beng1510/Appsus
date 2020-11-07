import { mailService } from '../service/mail-service.js'
import { eventBus } from "../../../services/event-bus.js"

export default {
    template: `
    <section class="mail-detail flex justify-center">
       <h1>New Mail</h1>
          
        <div class="main-container">

            <header class="head-mail ">
            <h2>Send by: {{mail.user}}</h2>
            <h3>subject: {{mail.subject}} </h3>
            <h4 class="date">At:{{mail.sentAt}}</h4>
            </header>

            <main class="main-mail ">
                <p>{{mail.body}}</p>
            </main>
           
        
            <footer class="footer-mail flex" >

                <div class="back-icon" >
                    <span  class="fas fa-arrow-left" @click="changeMail(-1)" > </span>
                </div> 
                
                
                <div class="inbox-icon" >
                    <span  class="fas fa-inbox"  @click="returnBack"> </span>
                </div> 

                
             
                <div class="del-icon" >
                    <span  class="fas fa-trash-alt" @click.stop="emitDelete(mail.id)"> </span>
                </div> 
              
                <div class="next-icon" >
                    <span  class="fas fa-arrow-right" @click="changeMail(-1)" ></span>
                </div> 
                
                 

              </footer>
       
            
        </div>
        
    </section>
 `,
    data() {
        return {
            mail: null,
        }
    },
    methods: {
        emitDelete(id) {
            console.log('id:', id)
            this.$emit('delete', id)
            mailService.deleteMail(id)
            eventBus.$emit('show-msg', { txt: 'Mail has been deleted', type: 'Success' })
        },
        returnBack() {
            this.$router.go(-1);
        },
        changeMail(diff) {
            const nextId = mailService.getMailById(this.mail.id, diff);
            console.log('nextId:', nextId)
            this.$router.push(`/mail/:${nextId}`);
            
        }
    },
    created() {

        const mailId = this.$route.params.mail;
        this.mail = mailService.getMailById(mailId)

    },


}
