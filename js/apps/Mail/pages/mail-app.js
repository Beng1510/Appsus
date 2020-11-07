import { mailService } from '../service/mail-service.js'
import mailFilter from '../cmps/mail-filter.cmps.js'
import mailList from '../cmps/mail-list.cmps.js'

export const mailApp = {
    name: 'mail-app',
    template: `
    <section class="Mail-app ">
       <h1>Mail Page</h1>
      
       <mail-filter :mails="mails"  @filtered="setFilter"></mail-filter>

        <div class="card ">
         <nav class=""> 
            <router-link to="/mail/newmail"  ><button class="compose-btn"></button></router-link>
            <router-link to="/mail/mark" ><button class="">Mark mails</button></router-link>  
            <router-link to="/mail/sent" ><button class="">Mark Inbox</button></router-link>  
            <router-link to="/mail/dele" ><button class="">Mark Inbox</button></router-link>  
        </nav>

        <mail-list   @mailClick="selectmail" :mails="mailsToShow" />

    </div>

    
    <router-view @canceled="cansleAdd"  ></router-view> 
        
    
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


            return this.mails.filter(mail => {
                console.log('mail:', mail)
                let currFilter = this.filterObj.filterByRead;

                if (currFilter === 'all') {
                    currFilter = mail.isRead
                    console.log('currFilter:', currFilter)
                }
                else if (currFilter === 'read') {
                    currFilter = true
                } else currFilter = false;
                return (mail.subject.toLowerCase().includes(txt) ||
                    mail.body.toLowerCase().includes(txt) ) &&
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

