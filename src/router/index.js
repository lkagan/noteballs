import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'notes',
        component: () => import('@/views/ViewNotes.vue')
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: () => import('@/views/ViewEditNote.vue')
    },
    {
        path: '/stats',
        name: 'stats',
        component: () => import('@/views/ViewStats.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router