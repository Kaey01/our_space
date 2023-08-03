import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login/Index.vue")
    },
    {
        path: "/",
        name: "Layout",
        component: () => import('../layout/Index.vue'),
        children: [
            {
                path: "/record",
                name: "Record",
                component: () => import("../views/Record/Index.vue")
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router