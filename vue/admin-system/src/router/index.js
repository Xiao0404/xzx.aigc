import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'



const routes =[
    {
        path:'/',
        redirect: '/dashboard'
    },
    {
        path:'/',
        name:'Home',
        component:Home,
        children:[
            {
                path:'/dashboard',
                name:'dashboard',
                meta:{
                    title:'系统首页',
                    permiss:'11',
                    // noAuth:true
                },
                // 路由懒加载
                component:()=>import('../views/dashboard.vue')

            },
            {
                path:'/system-user',
                name:'system-user',
                meta:{
                    title:'用户管理',
                    permiss:'11'
                },
                component:()=>import('../views/system-user.vue')

            },
            {
                path:'/system-role',
                name:'system-role',
                meta:{
                    title:'角色管理',
                    permiss:'12'
                },
                component:()=>import('../views/system-role.vue')
            }
        ]

    },
    {
        path:'/login',
        meta:{
            title:'登录',
            // 路由守卫中直接放行
            noAuth:true
        },
        component:()=>import('../views/login.vue')

    },
    { 
        path:'/403',
        meta:{
            title:'403',
            noAuth:true

        },
        component:()=>import('../views/403.vue')
    },
    {
        path:'/404',
        name:'404',
        meta:{
            title:'404',
            noAuth:true
        },
        component:()=>import('../views/404.vue')
    },
    {

    }
]
// 用history url 传统url 跟后端一样
// 自己人用的，兼容性差一点
const router = createRouter({
    history:createWebHistory(),
    routes

})

// 路由守卫
router.beforeEach((to,from,next) => {
    // 标题跟随改变
    document.title = to.meta.title
const role = localStorage.getItem('ms_name') || 'admin'
const permiss = {
    'admin':['1','11','12'],
    'user':['11']
}


    // 没登入直接被拦下
    if(!role && !to.meta.noAuth){
        next('/login')
    } else if(!permiss[role].includes(to.meta.permiss)){
        next('/403')
    }else{
        // 直接放行
        next()
    }
    console.log(role,permiss[role]);
}
)

export default router