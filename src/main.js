import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import $ from 'jquery'
import bootstrap from 'bootstrap'
import VueCookies from 'vue-cookies';

import 'bootstrap/dist/css/bootstrap.css'



const app=createApp(App)

app.use(router)
app.use(VueCookies)
app.mount('#app')
