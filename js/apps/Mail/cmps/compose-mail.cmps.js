import { mailService } from '../service/mail-service.js'
import { utilsService } from '../service/utils-service.js'


export const composeMail = {
    name: 'compose-mail',
    template: `
    <section>
        <form @submit.prevent="addMail">

            <h2>compose Mail</h2>
            <label>
                From:
                <input type="text" ref="nameInput" v-model:value="mail.user">
            </label>
            <label>
                Subject:
                <input type="text" v-model:value="mail.subject">
            </label>
            <textarea name="moreInfo" cols="50" rows="10" v-model:value="mail.body"></textarea>
            <button >Send Mail</button> 
        </form>
            
        </section>
        `,

    
    data() {
        return {
            mail: null,
        }
    },
    methods: {
        addMail() {
            // this.mail
            
            

            mailService.addMail(this.mail)

            // this.$emit('add', this.mail);
            // console.log('this.mail:', this.mail)

        }
    },
    mounted() {
        this.$refs.nameInput.focus();
    },
    created() {

        this.mail = mailService.getNewMail()


    }
}