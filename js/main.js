
import { myRouter } from './routes.js'

import mainHeader from '../pages/main-header.js'


const options = {
    el: '#app',
    router: myRouter,
    template: `
        
        <section>
            <main-header></main-header>

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

