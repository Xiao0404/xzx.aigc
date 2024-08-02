# 大厂项目技能点分析
- 全家桶
- 不要搞后端  假数据 
- TypeScript    js超集
    - 在路由配置文件添加  RouterRecordRaw  类型约束
    - pinia 里所有响应式数据都要添加类型约束  ref<泛型>
    - types 目录是类型定义的专属目录，按模块申明类型
        export type typeName = {    type不属于js  属于ts的
        }
    - .vue 文件中加入 lang="ts"支持
- 工程化 vite
    - 快
    - 先编译再运行
        开发时写的ts， 编译后js 运行
        scss -> css 一样
    - alias配置
        @ -> src
        path.resolve(__dirname,"./src") 更严谨
        在ts 项目里我们要手动安装 @types/node  node 的类型文件
    - vant 自动加载
        借助vite 工程化 unplugin-vue-components 插件  @vant/auto-important-resolver 加vant 的加载放到vite 启动运行阶段
        项目启动更快，因为首页不需要再加载vant了
    - 按需加载组件库的组件
- 使用了vant UI 组件库
    - 选择vant 加速开发，不用重复造轮子
    - 组件开发文档
    - 学习刀很多组件的写法 比如 具名插槽
        - 组件的定制性
        - 
- hooks   useRouter    手写自定义一个hook
- 高质量的组件 
- tailwindcss 界面   css能力较强
    - 安装 tailwindcss  
    - 原子化的css
    - 基本不用怎么写css，很快
    - bg-gradient-to-b from-orange-500 to-orange-300 线性渐变
    - 如果不用渐变， 就要用图片吧 (发送http请求 + 图片比较大)？ -> v性能优化
    - flex
        flex-direction  self-items  flex: flex-basic flex-shrink flex-grow
- html5 的能力点
    语义化标签
        main
    localStorage
    observer
- es6
    - es6 module  
        import from + export/export default
        import * as R
        import R,{x,y}  from  ''
        import type R 
- css
    - flex flex: 0 0 auto   col    flex-end    flex:1
    - gradient AI 结合 语义化
- vue 语法考点安排
    - 插槽

    - toRefs
        将Store 变成组件方便解构的响应式对象
        当从一个响应式对象直接解构时，它的属性会丢失响应式，原因是解构的是值
        所以用 toRefs 将响应对象 方便的拆解为多个独立的响应式引用对象
        应用场景
            pinia  解构多个响应式共享状态的时候
    - keep alive
        vue 性能优化的语法  
            - router-vue 路由的切换，组件会重新渲染
            - 首页不应该被卸载，频繁回到首页，为了提升体验，keep alive 不卸载组件，只切换
            - 任何需要缓存的组件 
            - v-slot 插槽指令，指定内部的slot 部分即渲染组件
            - keep-alive 全局组件，缓存组件 性能优化
            - include  route-name 数组，指定缓存组件  结合 route.meta.cache |  route.meta.keepAlive
                exclude  排除缓存组件
            - computed 计算属性 + useRouter 
                router.allRoutes().filter.map()
    - watch
    - 懒加载
    - 性能优化
        - 路由懒加载
        - gradient
        - vite vant
        -keep-alive
    - 防抖节流

- 项目写法
    - 先选择项目
        AI 豆包/通义千问/星火
        大厂的热门项目仿写  小红书 蔚来 小米 ...  移动端的
    - vant 
    - html5 语义化
    - pinia  toRefs() 流程
    