import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path:'/login',
        component:()=>import('@/views/login.vue'),
        meta:{
            title:'登录'
        }
    },
    {
        path:'/register',
        component:()=>import('@/views/register.vue'),
        meta:{
            title:'注册'
        }
    }
  ]
})

const whitePath = ['/login','/register']

// 全局的前置路由守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
    if(!whitePath.includes(to.path)){
        // 判断浏览器有无userInfo
        if(!localStorage.getItem('userInfo')){ //没登录
           router.push('/login')
           return
        }else{
            next()
            return
        }
    }
    next()
})




export default router
