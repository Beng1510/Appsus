import homePage from './pages/home-page.js'
// import aboutUs from '../pages/about-us.js'
import { mailApp ,unreadMail } from './apps/Mail/pages/mail-app.js'
import { composeMail } from './apps/Mail/cmps/compose-mail.cmps.js'
import mailDeatail  from './apps/Mail/pages/mail-detail.js'
import keepApp from './apps/Keep/pages/keep-app.js'


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
            //     path: 'inbox',
            //     component: inboxMail
            // },
          
            {
                path: 'unread',
                component: unreadMail
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
     {
        path: '/keep',
        component: keepApp
    },


]

export const myRouter = new VueRouter({ routes: myRoutes })
