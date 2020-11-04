
import { myRouter } from './routes.js'
import {keepService} from '../js/apps/Keep/services/keep-service.js'
import mainHeader from './pages/main-header.js'


const options = {
    el: '#app',
    router: myRouter,
    template: `
        

        <section>
            <main-header></main-header>
 <!-- <header>
            <nav>
                <h2 class="header-title">Appsus</h2>
                | <router-link to="/" exact>Home</router-link> |
                <router-link to="/about">About Us</router-link> |
                <router-link to="/book" exact>Book App</router-link> |
                <router-link to="/keep" exact>Keep App</router-link> |
                <router-link to="/mail" exact>Mail App</router-link> |
               
            </nav>
</header> -->
                <main>
                    <router-view></router-view>
                </main>
        
        </section>
    `,
    components: {
        mainHeader
    },
}

const app = new Vue(options);

