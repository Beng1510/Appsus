
import { keepService } from '../services/keep-service.js'
import keepAdd from '../cmps/keep-add.cmps.js'

export default {

    template: `
    <section class="keep-app">
       <h1>Keep Page</h1>

       <keep-add></keep-add>



    </section>
`,
components: {
    keepAdd
     
}

}

