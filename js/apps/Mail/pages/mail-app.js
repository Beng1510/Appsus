import { mailService } from '../service/mail-service.js'
import mailFilter from '../cmps/mail-filter.cmps.js'
import mailList from '../cmps/mail-list.cmps.js'
import mailNav from '../cmps/mail-nav.cmps.js'


export const mailApp = {
    name: 'mail-app',
    template: `
    <section class="Mail-app ">
       <h1>Mail Page</h1>
      
       <mail-filter :mails="mails"  @filtered="setFilter"></mail-filter>

        <div class="card ">
         <nav class="flex"> 
             <div class="side-bar flex column">
             
                 <router-link to="/mail/newmail"  ><button class="compose-btn"></button></router-link>
                 <router-view  ></router-view> 
                 <mail-nav @mailInboxFilter="inboxMailsToShow" :mails="mailsToShow"></mail-nav>
            </div>
                 <mail-list   @mailClick="selectmail"  :mails="mailsToShow" />
            
        </nav>
        </div>

    
        
    
    </section>
`, data() {
        return {
            mails: mailService.query(),
            mail: null,
            filterObj: null,
            inboxToShow: ''
        }
    },
    created() {
        this.mails = mailService.query()
    },
    components: {
        mailList,
        mailFilter,
        mailNav

    },
    methods: {
        selectmail(mailId) {
            this.mail = mailService.getMailById(mailId)
            this.mail.isRead = true;
            this.$router.push(`/mail/${mailId}`)
        },
        setFilter(filterObj) {
            this.filterObj = filterObj;
        },
        cansleAdd() {
            this.addingMail = !this.addingMail
        },
        inboxMailsToShow(mailType) {
            this.inboxToShow = mailType;
        },
    },
    computed: {
        mailsToShow() {
            if (!this.filterObj) return this.mails;
            const txt = this.filterObj.filterByTxt.toLowerCase();
            return this.mails.filter(mail => {
                let currFilter = this.filterObj.filterByRead;
                if (currFilter === 'all') {
                    currFilter = mail.isRead
                }
                else if (currFilter === 'read') {
                    currFilter = true
                } else currFilter = false;
                return (mail.subject.toLowerCase().includes(txt) ||
                    mail.body.toLowerCase().includes(txt)) &&
                    mail.isRead === currFilter
            })
        },
    }
}





export const inboxMail = {
    name: 'inbox',
    template: `
    <section>
        <h2>Our team is Awesome</h2>
        <p>
            Team is everyting Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex nesciunt soluta molestiae odio deserunt harum quibusdam quam temporibus ratione eligendi, impedit consequatur. Voluptate quas dicta, praesentium et officiis suscipit.            
        </p>
    </section>
    `
}


// export const opneMail = {
//         name: 'open-mail',
//         template: `
//     <section>
//         <h2>New Mail</h2>
//         <p>
//             Our endi, impedit ct officiis suscipit.            
//         </p>
//     </section>
//     `
//     }

