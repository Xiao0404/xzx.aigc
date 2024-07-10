import { createRouter,createWebHashHistory } from 'vue-router'

const router = createRouter(
    {
        history:createWebHashHistory(),
        routes:[
            {
                path:'/',
                name:'Home',
                component:() => import('../views/Home.vue')
            },
            {
                path:'/post/:id',
                name:'Detail',
                component:() => import('../views/Detail.vue')
            },
            {
                path:'/login',
                name:'Login',
                component:() => import('../views/Login.vue')
            },
            {
                path:'/cart',
                name:'Cart',
                meta:{
                        requireAuth: true // 加权限才能进入
                },
                component:() => import('../views/Cart.vue')
            }
        ]
    }
)

// 路由守卫
router.beforeEach((to,from,next) =>{
    // console.log(to,from,'?????');  // to 去向的路由     from 来自的路由   next 为指定去向的路由 
    //     next({path:'/login'})

        if (to.meta.requireAuth){
                if(localStorage.getItem('isLoggedIn')){
                    next()
                }else{
                    next({path:'/login'})
                }
        }else{
        next()
    }
})

export default router