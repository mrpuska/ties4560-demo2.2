import { createApp } from 'vue'
import { useRouter, createRouter, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import DropBox from './components/DropBox.vue';
import LoginCallback from './components/LoginCallback.vue'
import Login from './components/Login.vue'

const routes = [
    {path: '/', component: App},
    {path: '/login', component: Login},
    {path: '/dropbox', component: DropBox},
    {path: '/login/callback', component: LoginCallback}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
