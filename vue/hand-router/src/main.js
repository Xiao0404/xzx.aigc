import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'


const app =  createApp(App)
// use 方法挂载了路由
// vue 只负责 组件思想, mvvm , 响应式 等核心
// 其他的交给生态系统 一起开源 vue-router 是vue 生态中的路由模块
// vue 和它生态的对接呢？ 就是这个use 方法
 app.use(router)
    .mount('#app')
    