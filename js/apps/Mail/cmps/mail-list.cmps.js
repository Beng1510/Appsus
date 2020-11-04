


export default {
    props:['mails'],
    template: `
    <section class="mail-list">
        <ul>
            <li v-for="mail in mails" :key="mail.id" >

               <h2>{{mail.body}}</h2>
               <!-- <mail-preview :mail="mail"/> -->
            </li>

            
        </ul>
    </section>
    `,
    methods: {
        emitMailClick(mailId){
            console.log('mailId:', mailId)

            this.$emit('mailClick', mailId)
        }
    },
    components:{
        
    }

 }
