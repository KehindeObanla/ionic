import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'
import authentication from '../views/authentication.vue'
import Mainpage from '../views/Mainpage.vue'
import Shoplist from '../views/Shoplist.vue'
import favorite from '../views/favorite.vue'
import recpiepercat from '../views/recpiepercat.vue'
import test from '../views/test.vue'
import category from '../views/category.vue'
import { auth } from '../main';
const guard = (to, from, next) => {
    const curruser = auth.currentUser;
    try {
        if (to.name != 'authentication' && !curruser) {
            next("/")
            return
        } else {
            next()
        }
    } catch (error) {
        console.log(error)
        next("/")
    }
}
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
        beforeEnter: guard,
        meta: { requiresAuth: true },

    },
    {
        path: '/favorite',
        name: 'favorite',
        component: favorite,
        beforeEnter: guard,
        meta: { requiresAuth: true }

    },
    {
        path: '/Shoplist',
        name: 'Shoplist',
        component: Shoplist,
        beforeEnter: guard,
        meta: { requiresAuth: true }

    },
    {
        path: '/recpiepercat',
        name: 'recpiepercat',
        component: recpiepercat,
        props: true,
        beforeEnter: guard,
        meta: { requiresAuth: true }

    },
    {
        path: '/test',
        name: 'test',
        component: test,


    },
    {
        path: '/category',
        name: 'category',
        component: category,
        beforeEnter: guard,
        meta: { requiresAuth: true }

    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router