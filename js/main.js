
import { myRouter } from './routes.js'
import { keepService } from '../js/apps/Keep/services/keep-service.js'
import mainHeader from './pages/main-header.js'
import mainFooter from '../js/pages/main-footer.js'
// import userMsg from './apps/Mail/cmps/user-msg.cmps.js'
// import userNoteMsg from './apps/Keep/cmps/user-note-msg.cmps.js'
import userMsg from './cmps/user-msg.cmps.js'
import { eventBus } from './services/event-bus.js'

const options = {
    el: '#app',
    router: myRouter,
    template: `
        

        <section>
            <main-header></main-header>

                <main>
                    <router-view></router-view>
                </main>

                <user-msg />
                <main-footer></main-footer>
                <!-- <user-note-msg /> -->
        
        </section>
    `,
    components: {
        mainHeader,
        userMsg,
        // userNoteMsg,
        eventBus,
        mainFooter

    },
}

const app = new Vue(options);

