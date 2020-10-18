// import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
//
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]
//
// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })
//
// export default router
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
        }
    ],

})

export default router
