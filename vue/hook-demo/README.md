# 项目亮点  难点之 hook

- 何为 hooks 
    以 use 开头的函数  ，带来了函数式编程  对立面是oop    将vue函数式编程推到了一个新高度
        将响应式业务(ref,reactive,生命周期,method)封装的函数
        utils 工具函数
       -  响应式业务的复用和维护方便，可以把响应式业务从组件里拆开，放到 hooks 函数中复用
       - 封装响应式业务的细节，对团队协作友好,极大的提升了生产效率  
 
    vue2 是选项式 API => vue3 是组合式 API   编程风格的改变

    - vue2 和 vue3 的核心区别  函数式编程   
        vue2  option API  一个对象要在 state  data()  computed  methods  oncreated 找  ， 项目复杂，代码维护成本高
        vue3  composition API  放到一起  维护成本低

    useRouter   useStore  方便

    - IntersectionObserver 是一个 Javascript API，用于监控一个元素是否出现在视口 (viewport) 内，可以用于图片懒加载的全新 API

        - 观察者模式  observe(DOM) 
        - 实例化的回调函数里  返回所有被观察的元素的情况  提供一个回调函数和可选的配置对象
        - isIntersecting  布尔值  目标元素是否出现在视口内
        - 完成后，取消监听，因为监听要消耗性能
        - 比其他方案的图片懒加载更高级


    - requestAnimationFrame  浏览器的API  用于动画的回调函数  按刷帧率执行  
    