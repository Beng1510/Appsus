import { mailService } from '../service/mail-service.js'

export const mailMark = {
    name: 'mail-mark',
    template: `
     <section class="mail-mark">
         <div class="mark-list">
         
            <!-- <ul>
                <li v-for="mail in mails" :key="mail.id"  >
                    <mail-preview :mail="mail" @click.native="emitMailClick(mail.id)" :class="{mailRead: mail.isRead ,mailUnRead: !mail.isRead }"  @delete="deleteMail"/>
                </li>
            </ul> -->
        </div>
       
    </section>
`,  
    data() {
        return {
            mails:null ,
            mail: null,
        }
    },
    methods: {
      
   
    },
   
    created(){
        
        this.mails = mailService.markMails()
        
        

    }

}