import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'notes',
            component: import('@/views/ViewNotes.vue')
        },
        {
            path: '/stats',
            name: 'stats',
            component: import('@/views/ViewStats.vue')
        },
    ]
})

createApp(App)
    .use(router)
    .mount('#app')

