import RouterLink from './RouterLink.vue'
import RouterView from './RouterView.vue'
import {ref, inject} from 'vue'


// 单例的责任
export const createRouter = (options) => {
    return  new Router(options)
}

// 提供一种灵活的方式来注册和响应浏览器的 hashchange 事件
export const createWebHashHistory = () => {
    function bindEvents(fn) {
        window.addEventListener('hashchange', fn)
    }
    // history 对象
    return {
        url: window.location.hash.slice(1) || '/',
        bindEvents
    }
}


// export const createWebHistory = () => {
//     return {
//         url: window.location.pathname,
//         bindEvents(fn) {
//             window.addEventListener('popstate', fn)
//         }
//     }
// }


// 标记一下  router 要向全世界暴露  常量所以名称要大写
const ROUTER_KEY = '__router__'

// use 开头的是一派 hooks 函数式编程
// 在 Vue.js 应用中提供一个便捷的方式来访问 Router 实例。通过调用这个函数，用户可以在任何组件中获取到 Router 实例，并进而访问实例上的属性和方法。
export const useRouter = () => {
        return inject(ROUTER_KEY)
}


class Router {
    constructor(options) {
        
        this.history = options.history
        this.routes = options.routes
        this.current = ref(this.history.url)
        this.history.bindEvents(() => {
            // console.log('//////////')
            this.current.value = window.location.hash.slice(1) 


        })
    }

    // use 调用 插件install
    install(app) {
        // 全局声明有一个router  全局使用的对象
        app.provide(ROUTER_KEY, this)
        console.log('准备与vue 对接', app)
        app.component('router-link', RouterLink)
        app.component('router-view', RouterView)

    }
}