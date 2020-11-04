import homePage from '../pages/home-page.js'
// import aboutUs from '../pages/about-us.js'
import bookApp from '../pages/book-app.js'
import mailApp from '../pages/mail-app.js'
import keepApp from '../pages/keep-app.js'


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
        path: '/book',
        component: bookApp
    },
    {
        path: '/mail',
        component: mailApp
    },
    {
        path: '/keep',
        component: keepApp
    },
    
]

export const myRouter = new VueRouter({ routes: myRoutes })
