# 蔚来

- 人才截胡
    - 不简单，也不太难
    - 三数之和
    - 手写发布和订阅
    - interface 和 type 的区别
    - 泛型
    - vite 和 webpack 区别 
        - vite 更快  vue 官方推荐
        - webpack 比较复杂，  但定制性和功能更强大

        - 工程化套件 
        - 开发阶段
         - 打包阶段
         - 上线阶段
    - style -> css
    - ts -> js
    - js   es6+ -> es5
    - .vue -> loader plugin 


    - node 命令行工具 启动工程化
    - 5173 端口 启动 web-server  index.html 首页   #root
         src/main.js 入口  App.vue 根组件渲染出来  


    - webpack  三巨头     执行顺序: webpack-cil  ->  webpack  ->  webpack-dev-server
        - webpack  打包功能核心
        - webpack-cil  命令行工具 
        - webpack-dev-server  开发服务器

    - 运行流程
        - npm run dev  脚本开始  webpack server  --open
        - webpack-cli  命令行工具接到命令行的指令 
            webpack 先打包
            serve 8080 
            -- open 自动打开浏览器
        - webpack 打包
            - 读取 根目录下的  webpack.config.js 配置文件
                - 模块化的 module.exports
                - entry (入口 main.js)  +  output (bundle.js) 
                - devServer  port + contentBase(首页)
                - plugins  HtmlWebpackPlugin  插入到 html 中

        
    - bundler 打包工具

    - entry -> output
        - 处理想做的事情  module 模块功能
            js es6+ -> es5 ? 兼容性更好 

        - 文件的类型 rules  
            test  正则 文件类型  
            - stylus  .stylus -> .css
            - js   es6 -> es5
            - ts -> js -> es5
            - .vue   vue -> js + html

        - loader  加载器  babel-loader   ->  babel(js转码器) 转译 es6 -> es5  
          
        - entry main.js -> module  -> rules -> 根据 test 文件类型 -> use -> loader  

        - babel  专门负责 js 转译的  es6 -> es5
            - babel-loader  加载 js 到 babel 工作间  加载器 
            - @babel/core  转译器的核心功能 
            - @babel/preset-env  转译器的配置文件  预处理方式



- vite webpack 区别
    - vite 简单 快 bundleless 不需要打包
    - webpack  bundle -> 慢    从入口到出口 打包成  bundle.js 文件
    - webpack 学习成本高,配置复杂，适合大型定制类项目的需求
    - vite 方便，快捷
        stylus 为例  vite  只需要安装 stylus 插件即可
        而 webpack 需要改配置  loader 等一堆 






- 两数之和
    - hashMap O(n) 空间换时间  
        - Map  key 可以是对象  
        - Map has  get  set   es6已经有新的数据结构了 
        求和变差值，存到Map中   

- 三数之和
    - 如何逐步确定每个数的过程
    - 第一个数  O(n)  排序 =》 相同的数在一起  ，相同元素可以跳过
    - 后面两个数 双指针  左指针小于右指针 
        - 如果和大于目标值  右指针左移
        - 如果和小于目标值  左指针右移
        - 如果和等于目标值  记录下来  左指针右移  右指针左移
    - 注意  相同元素可以跳过 
    - 排序 + 双指针

- 大数之和


- 发布订阅模式 (event bus) 事件总线
    自定义事件
    - 发布者 
    - 订阅者
    - 关系  维护一个数组 cache = []
    - key 
    - once   只执行一次
    - off   移除订阅者
    - on  收集订阅者
    - emit  触发事件 通知所有的订阅者执行

    - 手写题（高频） 和 call 等有区分度
    - EventEmitter  发布订阅模式


- type 和 interface 的区别
    ts 的最高频考题
   都可以用于类型的声明
   - type 类型别名，可以给简单数据提供类型别名，而interface只能给对象做类型声明。
   - interface 支持继承，type 不支持继承。
   - interface 可选数据用？     ; 隔开


- 对泛型的理解
    Generics 是一种允许我们使用类型变量的方式，来创建可重用的组件。核心可以使用类型变量 T   。
    类型参数化
            function identity<T>(arg: T): T {
            return arg;
        }
