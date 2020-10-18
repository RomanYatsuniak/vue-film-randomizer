import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home";
import Films from "@/views/Films"
import Enter from "@/views/Enter"
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
            path: "/:pathMatch(.*)*",
            component: () => import("@/views/Page404")
        }
    ],

})

export default router
