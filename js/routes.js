import homePage from './pages/home-page.js'
// import aboutUs from '../pages/about-us.js'
import { mailApp ,unreadMail,newMail } from './apps/Mail/pages/mail-app.js'
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
            {
                path: '/mail/unreadInbox',
                component: unreadMail
            },
            {
                path: '/mail/newmail',
                component: newMail
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
