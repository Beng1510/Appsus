


export default {
    template: `
    <section class="mail-nav ">
    <div class="nav-icons">
    <a  class="fas fa-inbox"  @click="setmailInboxFIlter('inbox')"><button> Inbox</button></a>
     <a class="fas fa-star" @click="setmailInboxFIlter('mark')"><button>Mark</button></a>
   <a class="far fa-paper-plane" @click="setmailInboxFIlter('sent')"><button>Sent</button></a>  
    </div>
    </section>
   `,
   data(){
       return{ 
           boxShow:false
       }
   },
   methods:{
   setmailInboxFIlter(mailType){
       console.log('mailType:', mailType)

   this.$emit('mailInboxFilter',mailType)
   this.$router.push('/mail')
   }


   }
    
 }