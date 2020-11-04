import { mailService } from '../service/mail-service.js'
import mailPreview from './mail-preview.cmps.js'


export default {
    props: ['mails'],
    template: `
    <section class="mail-list">
        <ul>
        <li v-for="mail in mails" :key="mail.id"  >
                <mail-preview :mail="mail" @click.native="emitMailClick(mail.id)" :class="{mailRead: mail.isRead }" />
                
        </li>

            
        </ul>
    </section>
    `,
    data(){
        return{
            mail: null,
        }
    },
    methods: {
        emitMailClick(mailId) {
            console.log('mailIddd:', mailId)
            
         
            // console.log('mailllllllls:', this.mail)
            // this.mail =mailService

            this.mail =  mailService.getMailById(mailId)
                //  .then(mail =>  this.mail = mail )
                

            this.mail.isRead = true;
            // console.log('mailssssssssssss:', this.mail)

            this.$emit('mailClick', mailId)
         
        }
    },
    components: {
        mailPreview,
    }

}
