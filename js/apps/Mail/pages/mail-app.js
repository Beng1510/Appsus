import { mailService } from '../service/mail-service.js'
import mailList from '../cmps/mail-list.cmps.js'

export const mailApp = {
    name: 'mail-app',
    template: `
    <section class="Mail-app ">
       <h1>Mail Page</h1>
       <!-- @mailClick="selectmail" -->

       <mail-list :mails="mails"  @mailClick="selectmail" />
    

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

    },
    components: {
        mailList,

    },
    methods: {
        selectmail(mailID) {
            
            // this.$router.push(`/mail/${mailID}`)
        }
    }
}

export const unreadMail = {
    name: 'unread-mail',
    template: `
    <section>
        <h2>Our team is Awesome</h2>
        <p>
            Team is everyting Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex nesciunt soluta molestiae odio deserunt harum quibusdam quam temporibus ratione eligendi, impedit consequatur. Voluptate quas dicta, praesentium et officiis suscipit.            
        </p>
    </section>
    `
}
export const newMail = {
    name: 'new-mail',
    template: `
    <section>
        <h2>New Mail</h2>
        <p>
            Our endi, impedit ct officiis suscipit.            
        </p>
    </section>
    `
}
export const opneMail = {
    name: 'open-mail',
    template: `
    <section>
        <h2>New Mail</h2>
        <p>
            Our endi, impedit ct officiis suscipit.            
        </p>
    </section>
    `
}
