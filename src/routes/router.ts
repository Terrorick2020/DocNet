import { createRouter, createWebHashHistory } from "vue-router";

import InfoPage from "../pages/InfoPage.vue";
import AuthPage from "../pages/AuthPage.vue";
import ClientPage from "../pages/ClientPage.vue";


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/home',
            alias: '/',
            name: 'InfoPage',
            meta: {
                title: 'Главная',
                needAuth: false
            },
            component: InfoPage
        },
        {
            path: '/auth',
            name: 'AuthPage',
            meta: {
                title: 'Авторизация',
                needAuth: false
            },
            component: AuthPage
        },
        {
            package: '/home',
            name: ClientPage,
            meta: {
                title: 'Личный кабинет',
                needAuth: true
            },
            component: ClientPage
        }
    ]
})

router.beforeEach( ( to, from, next ) => {

    document.title = String( to.meta.title ) || 'Ошибка'
    next()
} )

export default router