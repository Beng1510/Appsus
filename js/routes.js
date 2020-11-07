import homePage from './pages/home-page.js'
import aboutUs from './pages/about-us.js'
import { mailApp , inboxMail} from './apps/Mail/pages/mail-app.js'
import { composeMail } from './apps/Mail/cmps/compose-mail.cmps.js'
import mailDeatail from './apps/Mail/pages/mail-detail.js'
import keepApp from './apps/Keep/pages/keep-app.js'
import {mailMark} from './apps/Mail/cmps/mail-mark.cmps.js'
import bookApp from './apps/Books/pages/book-app.js'
import bookDetails from './apps/Books/cmps/book-details.js'
// import bookAdd from './apps/Books/cmps/'




const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutUs
    },
    
   
    {
        path: '/mail',
        component: mailApp,
        children: [

            // {
            //     path: 'mark',
            //     component: mailMark
            // },

            // {
            //     path: 'STARRED',
            //     component: markMailBox
            // },
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
    {
        path: '/book',
        component: bookApp,
        children: [
            {
                path: '/book/:bookId',
                component: bookDetails
            },
            // {
            //     path: '/book/add',
            //     component: bookAdd
            // },
        ] 
    },


]

export const myRouter = new VueRouter({ routes: myRoutes })
