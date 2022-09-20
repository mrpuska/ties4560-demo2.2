import { createApp } from 'vue'
import { useRouter, createRouter, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import DropBox from './components/DropBox.vue';
import LoginCallback from './components/LoginCallback.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import FileUpload from './components/FileUpload.vue'
import Information from './components/Info.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/dropbox', component: DropBox},
    {path: '/login/callback', component: LoginCallback},
    {path: '/upload', component: FileUpload},
    {path: '/info', component: Information}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
