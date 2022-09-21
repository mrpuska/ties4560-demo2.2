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
import FileList from './components/FileList.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/dropbox', component: DropBox},
    {path: '/login/callback', component: LoginCallback},
    {path: '/upload', component: FileUpload},
    {path: '/info', component: Information},
    {path: '/files', component: FileList}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

Object.defineProperty(Number.prototype,'fileSize',{value:function(a: any,b: any,c: any,d: any){
    return (a=a?[1e3,'k','B']:[1024,'K','iB'],b=Math,c=b.log,
    d=c(this)/c(a[0])|0,this/b.pow(a[0],d)).toFixed(2)
    +' '+(d?(a[1]+'MGTPEZY')[--d]+a[2]:'Bytes');
    },writable:false,enumerable:false});

const app = createApp(App)
app.use(router)
app.mount('#app')
