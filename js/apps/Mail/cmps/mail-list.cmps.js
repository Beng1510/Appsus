import { mailService } from '../service/mail-service.js'
import { eventBus } from '../service/event-bus.js'
import mailPreview from './mail-preview.cmps.js'
import mailStatus from './mail-status.cmps.js'

export default {
    props: ['mails'],
    template: `
    <section class="mail-list">
        <ul>
        <li v-for="mail in mails" :key="mail.id"  >
            <mail-preview :mail="mail" @click.native="emitMailClick(mail.id)" :class="{mailRead: mail.isRead ,mailUnRead: !mail.isRead ,mailActiv: mail.isActiv }"  @delete="deleteMail" @activ="activMail"/>
        </li>
        
        <!-- <mail-status  :mail="mail"/> -->
        </ul>
    </section>
    `,
    data() {
        return {
            mail: null,
        }
    },
    methods: {
        emitMailClick(mailId) {

            
            this.mail = mailService.getMailById(mailId)
            if(this.mail.isActiv) this.mail.isActiv = false ;
            this.mail.isRead = !this.mail.isRead
            this.$emit('mailClick', mailId)

        },
        deleteMail(mailId) {

            mailService.deleteMail(mailId)
            eventBus.$emit('show-msg', { txt: 'Mail has been deleted', type: 'Success' })
      
        },
        activMail(mailId){
            this.mail = mailService.getMailById(mailId)

            console.log('this.mail.isActiv:', this.mail.isActiv)
            this.mail.isActiv = !this.mail.isActiv ;
            console.log('this.mail.isActiv:', this.mail.isActiv)

            // mailService.activMail(mailId)
        }
    },
    components: {
        mailPreview,
        mailStatus
    }

}
