import {createRouter, createWebHashHistory} from 'vue-router'

import Setting from './view/Setting/Setting.vue'
import Search from './view/Search/Search.vue'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/setting',
            name: 'setting',
            component: Setting,
        },
        {
            path: '/search',
            name: 'search',
            component: Search,
        },
    ],
})


export default router
