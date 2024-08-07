- 巴菲特  卖了一半的苹果股票
    - 端模型要来了
    - 小一点，但是新能还行
- Transformer.js   前端AI库 
    来自全球最大AI社区  huggingFace (LLM 开源社区)
- AI 是技术趋势，拥抱AI
- AIGC 现在已经很成熟了，生成代码，快速学习
- coze agent 开发，也调用过接口完成项目中的AI应用
- 了解OpenAI 等LLM接口，完成过文生成图，语义搜索等
- AI带来了全新的开发体验，前端工程师需要实施AI应用用户体验
    - prompt engineer
        - 角色 role
        - 清晰描述任务
        - 分布，交给多个工作流
        - 可以做什么，不做什么
        - 给大模型一些思考时间
    - button  disabled  
- AI 端模型能力是一个风口，了解transformer.js


- react 学的怎么样
    了解语法，写过一个AI项目，一周内能上手

- react 组件？
    返回 JSX 的函数就是组件  .jsx
        - vue 是 template/script/css 三段写法  .vue
    函数就是对象、
    React(函数式组件)/Vue 函数式编程 setup
- react 坚持不用v-model 双向绑定  性能不好   单向数据流
    vue  v-model  双向绑定
- MVVM + 组件化思想 + 函数式编程
    - vue 优势是 API 简好上手  setup (ref,reactive definePops) v-for/v-if
    - react 优势是 纯JS风格  函数的参数解构props  map  缺点是上手难
- react  <></>
    做容器 又没有多加节点 
    但是又不用div等
    文档碎片组件  Fragment

- 请介绍 react 的hook 函数
    react 在 hook 上很激进 ，vue 借鉴了 hook 思想
    - useState  引入一个响应式状态(ref)
        参数是默认值，返回是数组，第一个是状态，第二个是更新状态的函数
    - useRef 
        vue中  ref  动态绑定节点/对象
        useRef  null ->  current
        要快速显示组件优先，所以 web worker 的实例化推迟  useRef 动态绑定
        worker 对象
        - worker  组件函数内局部变量  null  访问问题
        - useEffect  实例化  性能问题
        - 任何地方都可以访问
        - 卸载时回收这个对象
    - useEffect  
        生命周期钩子函数
        - onMounted
        - onUnMounted  return() => {  ...卸载功能 }
        - onUpdated

- 数据通信
    - 状态管理 pinia redux
    - 父子组件通信

- js 
    es6+ 介绍 (阮一峰)
        - 2015
        - 让代码简洁
            空值合并运算符 ES 2020
            我在开发AI 项目的 Progress 组件时
            percentage = percentage ? percentage :  0 三元运算符
            -> percentage =  percentage ?? 0   当不为空值就返回本身时，可以使用空值合并运算符  简化 
        - 大型项目
            class  extend  块级作用域
        - 使用了 es6  class  封装了 MyTranslationPipeline 类
            - 讲复杂留给自己
            - 方便别人调用
- 设计模式
    - 单例模式
        - pipeline  实例化时候，只能实例一次  下载大模型还有实例化开销特别大
        


- html5 功能
    - 拖拽
    - form 表单新特性
    - 语义化标签
    - canvas audio
    - 本地存储  localStorage  sessionStorage
    - web  socket
    - html5  file
    - web Worker  多线程
    - LBS  附近的位置
    - WebGL  three.js   3D 小米汽车

- Web Worker
    - JS 因复杂任务启动worker 线程
    - 性能优化，压缩，加密 AI ... 不做  DOM 编程
    - 实例化 new Worker(new URL('./worker.js'),{type:'module'})
    - 消息机制完成  主线程盒worker线程间的通信
        事件监听
        postMessage  发送事件

- Transformer.js
    - import   from  从cdn 加载 nlp  js 库
    - pipeline('sentiment-analysis')  pipe()  功能函数
        - 下载大模型   前端反馈
        - pipeline(task,model,options)
        - 放在 worker 线程  配合单例模式实例化 下载大模型等文件
        - 调用 options progress_callback  实时反馈下载进度
        - web worker postMessage  消息机制，通知主线程 Progress 模块 更新
        - 从而完成 pipeline  功能准备和实例化，pipeline 准备的UI用户体验  


    - pipe(text)  拿到结果
        postMessage  

## 百度翻译
    - NLP 翻译任务 机器学习
    - 数据驱动界面
        源语言 英文
        结果语言 中文
        待翻译文本
        翻译结果

    - 介绍项目小作文
        - 本项目基于React 和来自 HuggingFace 社区的 Transformers.js  实现了AI翻译功能，它让我感受到前端未来独立开发AI项目的魅力
        - 不管是操作系统，还是手机，甚至是未来的机器人，端LLM的未来即将到来，前端AI大机会到来了，前端，后端，AI，js都可以搞。
        - 本项目focus 了 AI功能的实现和 性能优化  以及良好返回的AI用户体验
        - React 开发了 LanguageSelector 组件， Progress 组件，使用了 React hooks useState 和 useEffect 和 useRef 等 hook 函数。 来管理状态和生命周期钩子函数，实现了从源语言到目标语言的翻译功能。 
        - AI 功能需要下载大模型，执行开销比较大，选择 web worker 多线程方案，
            将 AI 任务交给 worker 线程，主线程只做 UI 
            主线程和worker 线程通过消息机制通信
            模型下载会有  initiate 、 progress 、 done  文件名+进度
            postMessage  交给主线程  更新进度条
            执行翻译拿到结果后，再次通知主线程显示结果
        - transformer.js  核心功能
            - pipeline (task,model,options) AI功能有很多，使用es6 的单例模式封装了 MyTranslationPipeline 类 做了性能优化，只需要下载大模型，初始化一次，
              options progress_callback 它是我们获取下载进度的回调函数
            - pipe(text,options)  调用上一步返回的 pipe 函数，传递文本 及相关语言，执行 AI 翻译，再次 postMessage 通知页面显示结果
