import { createRouter, createWebHashHistory } from "vue-router";

import InfoPage from "../pages/InfoPage.vue";
import AuthPage from "../pages/AuthPage.vue";


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/info',
            alias: '/',
            name: 'InfoPage',
            meta: {
                title: 'Главная'
            },
            component: InfoPage
        },
        {
            path: '/auth',
            name: 'AuthPage',
            meta: {
                title: 'Авторизация'
            },
            component: AuthPage
        }
    ]
})

router.beforeEach( ( to, from, next ) => {

    document.title = String( to.meta.title ) || 'Ошибка'
    next()
} )

export default router