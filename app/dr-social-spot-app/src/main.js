import { createApp } from 'vue'
import App from './App.vue'
import router from './core/router'
import { FontAwesomeIcon } from "@/core/font-awesome"
import Helpers from '@/helpers/index.js'
const app = createApp(App)
app.use(router)
app.mixin(Helpers)
app.component("fa", FontAwesomeIcon)
app.mount('#app')
