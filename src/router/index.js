import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'
import authentication from '../views/authentication.vue'
import Mainpage from '../views/Mainpage.vue'
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

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router