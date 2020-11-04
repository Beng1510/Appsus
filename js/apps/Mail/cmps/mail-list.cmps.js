import mailPreview from './mail-preview.cmps.js'


export default {
    props:['mails'],
    template: `
    <section class="mail-list">
        <ul>
        <li v-for="mail in mails" :key="mail.id"  >
                <mail-preview :mail="mail" @click.native="emitMailClick(mail.id)" :class="{mailRead: mail.isRead }" />

        </li>

            
        </ul>
    </section>
    `,
    methods: {
        emitMailClick(mailId){
            
            console.log('mailId:', mailId)
            this.$emit('mailClick', mailId)
            // return {read:}
        }
    },
    components:{
        mailPreview,
    }

 }
