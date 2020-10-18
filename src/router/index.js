import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home";
import Films from "@/views/Films"
import Enter from "@/views/Enter"
import Page404 from '@/views/Page404'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/films',
            component: Films
        },
        {
            path: '/enter',
            component: Enter
        },
        {
            path: '*',
            component: Page404
        }
    ],

})

export default router
