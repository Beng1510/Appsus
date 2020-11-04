import homePage from '../pages/home-page.js'
// import aboutUs from '../pages/about-us.js'


const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    // {
    //     path: '/about',
    //     component: aboutUs
    // },
    // {
    //     path: '/book',
    //     component: bookApp
    // },
    // {
    //     path: '/mail',
    //     component: mailApp
    // },
    // {
    //     path: '/keep',
    //     component: keepApp
    // },
    
]

export const myRouter = new VueRouter({ routes: myRoutes })
