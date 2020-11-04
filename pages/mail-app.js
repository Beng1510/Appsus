import { mailService } from '../apps/mail/service/mail-service.js'
import mailList from '../apps/mail//cmps/mail-list.cmps.js'

export default {
    template: `
    <section class="Mail-app ">
       <h1>Mail Page</h1>
       <!-- @mailClick="selectmail" -->

       <mail-list :mails="mails"  />
    

    </section>
`, data() {
        return {
            mails: null,
        }
    },

    created() {

        // mailService.query()
        //     .then(mails => {console.log('this.mails:', this.mails),this.mails = mails})

        this.mails = mailService.query()
        console.log('3');
        console.log('this.mails:', this.mails)
         

    },
    components: {
        mailList,

    }
}

