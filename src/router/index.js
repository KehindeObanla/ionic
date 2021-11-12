import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'
import authentication from '../views/authentication.vue'
import Mainpage from '../views/Mainpage.vue'
import Shoplist from '../views/Shoplist.vue'
import favorite from '../views/favorite.vue'
import recpiepercat from '../views/recpiepercat.vue'
const routes = [{
        path: '/',
        redirect: '/authentication'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/authentication',
        name: 'authentication',
        component: authentication
    },
    {
        path: '/Mainpage',
        component: Mainpage,

    },
    {
        path: '/favorite',
        name: 'favorite',
        component: favorite,

    },
    {
        path: '/Shoplist',
        name: 'Shoplist',
        component: Shoplist,

    },
    {
        path: '/recpiepercat',
        name: 'recpiepercat',
        component: recpiepercat,

    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router