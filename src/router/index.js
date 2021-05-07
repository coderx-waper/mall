import Vue from 'vue'
import VueRouter from 'vue-router'

// 注册组件
Vue.use(VueRouter)

const Home = ()=> import('../views/home/Home.vue')
const Discover = ()=> import('../views/discover/Discover.vue')
const Cart = ()=> import('../views/cart/Cart.vue')
const Profile = ()=> import('../views/profile/Profile')

// 配置路由规则
const routes =[
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/discover',
        component:Discover
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/profile',
        component:Profile
    }
    
]

// 创建路由对象
const router = new VueRouter({
    routes,
    mode:'history'
})

export default router