import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/index.vue'
import Register from '../views/register/register.vue'
import Login from '../views/login/login.vue'
import NotFound from '../views/404/404.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history', 
    routes:[
        {
            path:"/",
            redirect:'/index'
        },
        {
            path:'/index',
            name:'index',
            component:Index
        },
        {
            path:"/register",
            name:'register',
            component:Register
        },
        {
            path:"/login",
            name:'login',
            component:Login
        },
        {
            path:"*",
            name:'notFound',
            component:NotFound
        }
    ]
})

//路由守卫，判断 token 是否存在 如果存在可以继续在下个页面访问，不存在返回登录页面
router.beforeEach((to,from,next) =>{
    let isLogin = localStorage.okokToken ? true : false
    if(to.path === '/login' || to.path === '/register') {
        next()
    } else {
        isLogin ? next() : next('/login')
    }
})

export default router