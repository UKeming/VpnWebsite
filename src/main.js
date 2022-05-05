import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import VueCookies from 'vue-cookies';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'


const app=createApp(App)
app.use(router)
app.use(VueCookies)
app.mount('#app')
