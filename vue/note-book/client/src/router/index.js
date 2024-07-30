import { createRouter, createWebHistory } from 'vue-router'
import noteList from '@/views/noteList.vue';


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
    },
    {
        path:'/',
        redirect:'noteClass'
    },
    {
        path: '/noteClass',
        component: () => import('@/views/NoteClass.vue'),
        meta:{
            title:'笔记分类'
        }
    },
    {
        path: '/noteList',
        component: noteList,
        meta:{
            title:'笔记列表'
        }
    },
    {
        path: '/noteDetail',
        component: () => import('@/views/NoteDetail.vue'),
        meta:{
            title:'笔记详情'
        }
    },
    {
        path: '/notePublish',
        component: () => import('@/views/NotePublish.vue'),
        meta:{
            title:'发布笔记'
        }
    }

  ]
})

const whitePath = ['/login','/register','noteClass','noteList']

// 全局的前置路由守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
    if(!whitePath.includes(to.path)){
        // 判断浏览器有无userInfo
        if(!localStorage.getItem('userInfo') || !localStorage.getItem('token')){ //没登录
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
