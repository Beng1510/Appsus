import mailPreview from './mail-preview.cmps.js'



export default {
    props:['mail'],
    template: `
    <section class="mail-preview" >
        
            <h2>{{mail.subject}}</h2>
            <h4>{{mail.body}}</h4>
          <!-- <button><img :src='asset/icons/delete.png'/></button> -->

     </section>
    `,
    


}