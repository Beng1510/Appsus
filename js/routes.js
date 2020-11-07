import homePage from './pages/home-page.js'
// import aboutUs from '../pages/about-us.js'
import { mailApp , inboxMail} from './apps/Mail/pages/mail-app.js'
import { composeMail } from './apps/Mail/cmps/compose-mail.cmps.js'
import mailDeatail from './apps/Mail/pages/mail-detail.js'
import keepApp from './apps/Keep/pages/keep-app.js'
import navMail from './apps/Mail/cmps/mail-nav.cmps.js'
import {mailMark} from './apps/Mail/cmps/mail-mark.cmps.js'





const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    // {
    //     path: '/about',
    //     component: aboutUs
    // },
    
   
    {
        path: '/mail',
        component: mailApp,
        children: [

            // {
            //     path: 'mark',
            //     component: mailMark
            // },

            {
                path: '',
                component: navMail
            },
            {
                path: 'mark',
                component: mailMark
            },
            {
                path: 'newmail',
                component: composeMail
            },

        ]
    },
    {
        path: '/mail/:mail',
        component: mailDeatail
    },
    // {
    //     path: '/mail/mark',
    //     component: mailMark
    // },
    {
        path: '/keep',
        component: keepApp
    },


]

export const myRouter = new VueRouter({ routes: myRoutes })
