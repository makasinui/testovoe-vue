import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/home/Home.vue";
import Convert from "@/pages/convert/Convert.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/convert', component: Convert }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;