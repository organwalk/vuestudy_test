import{ createRouter,createWebHistory} from 'vue-router'
import Test_Home from './src/components/Test_Home.vue'
import Test_About from './src/components/Test_About.vue'
import Test_Message from './src/views/Test_Message.vue'
const routes = [
    {
        path:'/',
        name:'home',
        component:Test_Home
    },
    {
        path:'/about',
        name:'about',
        component:Test_About
    },
    {
        path: '/message',
        name: 'messages',
        component: Test_Message,
      },
   
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router