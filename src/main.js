import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import $ from 'jquery'
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'



const app=createApp(App)

app.use(router)

app.mount('#app')
