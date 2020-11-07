import { mailService } from '../service/mail-service.js'

export const mailMark = {
    props: ['mails'],
    name: 'mail-mark',
    template: `
     <section class="mail-mark">
         <div class="mark-list">
         
            <ul>
                <li v-if="mail.isActiv" v-for="mail in mails" :key="mail.id"  >
                    {{mail.subject}}
                    {{mail.user}}
                    {{mail.body}}
                    {{mail.sentAt}}
                   
                </li>
            </ul>
        </div>
       
    </section>
`,  
    data() {
        return {
            // mails:null ,
            mail: null,
        }
    },
    methods: {
      
   
    },
   
    created(){
        console.log('marking');
        console.log('this.mails',this.mails);
        this.mails = mailService.markMails()
        
        

    }

}