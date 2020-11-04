import { mailService } from '../service/mail-service.js'
import mailList from '../cmps/mail-list.cmps.js'

export const mailApp = {
    name: 'mail-app',
    template: `
    <section class="Mail-app ">
       <h1>Mail Page</h1>
       <!-- @mailClick="selectmail" -->
       
       <nav>
            <router-link to="/mail/unreadInbox">Unread Inbox</router-link> | 
            <router-link to="/mail/newmail">New Mail +</router-link>
            
        </nav>

       <mail-list :mails="mails"  @mailClick="selectmail" />

    </section>
`, data() {
        return {
            mails: null,
        }
    },

    created() {

       
        this.mails = mailService.query()

    },
    components: {
        mailList,
    },
    methods: {
        selectmail(mailId) {

            
            this.mail = mailService.getMailById(mailId)
            this.mail.isRead = true;
            


            this.$router.push(`/mail/${mailId}`)
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
