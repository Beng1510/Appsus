import { mailService } from '../service/mail-service.js'
import mailFilter from '../cmps/mail-filter.cmps.js'
import mailList from '../cmps/mail-list.cmps.js'

export const mailApp = {
    name: 'mail-app',
    template: `
    <section class="Mail-app ">
       <h1>Mail Page</h1>
      
       <nav>
           <router-link to="/mail/unreadInbox">Unread Inbox</router-link> | 
           <router-link to="/mail/newmail">New Mail +</router-link>
        </nav>
 <!-- //////////////////////////////////// -->

       <router-view @canceled="cansleAdd"  ></router-view> 
       <!-- <button @click="addMail" >Send Mail</button>  -->

       <!-- ////////////////////// -->

        <mail-filter :mails="mails"  @filtered="setFilter"></mail-filter>
        <mail-list   @mailClick="selectmail" :mails="mailsToShow" />
    </section>
`, data() {
        return {
            mails: mailService.query(),
            mail: null,
            filterObj: null,
            // addingMail: false
        }
    },
    created() {
        this.mails = mailService.query()
    },
    components: {
        mailList,
        mailFilter,
    },
    methods: {
        selectmail(mailId) {
            this.mail = mailService.getMailById(mailId)
            this.mail.isRead = true;

            console.log('mailId:', mailId)
            this.$router.push(`/mail/${mailId}`)
        },
        setFilter(filterObj) {
            console.log('filterObj:', filterObj)
            this.filterObj = filterObj;
        },
        cansleAdd() {
            this.addingMail = !this.addingMail
        }

    },
    computed: {
        mailsToShow() {
            
            console.log('this.filterObj:', this.filterObj)
            if (!this.filterObj) return this.mails;
            const txt = this.filterObj.filterByTxt.toLowerCase();
            console.log('txt:', txt)


            return this.mails.filter(mail => {
                return mail.subject.toLowerCase().includes(txt)

            })

        },
    }
}

export const markMailBox = {
    name: 'mark-mail-box',
    template: `
    <section>
        <h2>Our team is Awesome</h2>
        <p>
            Team is everyting Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex nesciunt soluta molestiae odio deserunt harum quibusdam quam temporibus ratione eligendi, impedit consequatur. Voluptate quas dicta, praesentium et officiis suscipit.            
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

