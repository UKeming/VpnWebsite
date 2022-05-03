import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Guide from '../components/install/Guide.vue'

const routes=[
    {path:'/', component: Home},
    {path:'/guide/:id', component: Guide}
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(process.env.BASE_URL),
    routes, // short for `routes: routes`
  })

  export default router
