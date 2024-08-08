import { createRouter,createWebHashHistory } from "vue-router";
import { RouteRecordRaw } from "vue-router";


const rootRoutes: RouteRecordRaw[] = [
        {
            path: '/',
            redirect: '/aiAssistant',
            meta: {
                keepAlive: false
            }

        },
        {
            path: '/aiAssistant',
            name: 'aiAssistant',
            component: () => import('../views/aiAssistant.vue'),
            meta: {
                keepAlive: false,
                title: 'AI助手'
            }


        },
        {
            path: '/home',
            name: 'home',
            component: () => import('../views/Home.vue'),
            meta: {
                keepAlive: false,
                title: '首页'
            }
        },
        {
            path:'/shopping',
            name:'shopping',
            component: () => import('../views/Shopping.vue'),
        },
        {
            path:'/account',
            name:'account',
            component: () => import('../views/Account.vue'),
        }
    ]

    const routes: RouteRecordRaw[] = [
        {
            path: '/',
            name: 'App',
            component: () => import('../views/layout/TheRoot.vue'),
            redirect: '/home',
            meta: {
                keepAlive: true
            },
            children: rootRoutes
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/login.vue'),
            meta: {
                keepAlive: false
            }

        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/register.vue'),
            meta: {
                keepAlive: false
            }
        },
        {
            path: '/dialogue',
            name: 'dialogue',
            component: () => import('@/views/Dialogue.vue'),
            meta: {
                keepAlive: true,
                title: 'AI智能推荐'
            }
        },
        {
            path: '/article/:id',
            name:'Article',
            component: () => import('../views/Article.vue'),
            props: true

        }
    ]

    const router = createRouter({
        history: createWebHashHistory(),
        routes
    })


    router.beforeEach((to, from, next) => {
        if (to.meta.title) {
            // 将对象类型转为字符串
            document.title = to.meta.title as string
        } else {
            document.title = '网站名称';
        }
        next();
    })

    export default router;