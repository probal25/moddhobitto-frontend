import Vue from "vue"
import VueRouter from 'vue-router';

import Login from "@/components/authentication/Login";
import Registration from "@/components/authentication/Registration";

Vue.use(VueRouter)
const routes = [
    {path: '/', component: Login},
    {path: '/login', component: Login},
    {path: '/register', component: Registration},
]

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;