# vue-router

- router 初始化以及配置
- 路由守卫
    router.beforeEach
- 路由懒加载  
    {
        path: '/about',
        component: () => import('./views/About.vue')
    }
    更快看到首页 Home.vue
- router-link (相当于一个链接标签)     router-view(将对应的组件显示在该组件的位置)     两个都是组件
- vue组件
    - 自定义组件
    - transition 内置组件
    - 全局组件  在任何地方都可以直接访问
        app.component('router-link',RouterLink)
        - 如果组件没有引入，dom 会把它当成一般标签来解析
        - 使用app.component
        - app.use(router)

- router-link 是怎么工作的呢？
    - 来自于vue-router
    - vue.Component() 全局组件的理解
    - vue.use()  vue 向插件生态注入 
    - router 插件 准备好install 方法
- <slot />
    - 插槽
    - 将组件的内部交给外部去自定义    自定义的组件里加一个<slot />标签可以让这个标签的文本由外部的内容替换
    - 提升了组件的可复用性
