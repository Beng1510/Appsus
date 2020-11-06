
import { myRouter } from './routes.js'
import { keepService } from '../js/apps/Keep/services/keep-service.js'
import mainHeader from './pages/main-header.js'
// import userMsg from './apps/Mail/cmps/user-msg.cmps.js'
// import userNoteMsg from './apps/Keep/cmps/user-note-msg.cmps.js'
import userMsg from './services/user-msg.cmps.js'
import { eventBus } from './services/event-bus.js'

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

                <user-msg />
                <!-- <user-note-msg /> -->
        
        </section>
    `,
    components: {
        mainHeader,
        userMsg,
        // userNoteMsg,
        eventBus

    },
}

const app = new Vue(options);

