import homePage from './pages/home-page.js'
// import aboutUs from '../pages/about-us.js'
import { mailApp ,unreadMail,newMail ,opneMail} from './apps/Mail/pages/mail-app.js'
// import mailApp  from './apps/Mail/pages/mail-app.js'
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
            {
                path: '/mail/:mail',
                component: opneMail
            },
        ]
    },
   
    {
        path: '/keep',
        component: keepApp
    },


]

export const myRouter = new VueRouter({ routes: myRoutes })
