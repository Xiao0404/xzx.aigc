# 字节面试题

- 书面专业表达 转换为口头面试表达
- 准确清晰的表达（逻辑，自信，睿智）
- 专业术语的表达
- 深度的扩展，结合应用场景

- 学习面试题本身
    - 泛前端基础，扎实，深度，穷追猛打
    - 中小型公司的面试惯性挂掉
    
- 箭头函数的this指向
    - 责任  准确回答  

    箭头函数是 ES6 引入的一种更简洁的函数表达方式，它与普通函数不同，它**没有自己的this**，而是**继承外部上下文**的this

    - 区别
    普通函数在调用时，this 取决于**调用方式**，而箭头函数不会根据调用方式而改变。

    箭头函数的this是**静态**的，在定义时决定，绑定到定义时上下文，由**词法作用域**决定。

    - 应用场景 
        箭头函数适合 避免this 动态变化的场景
            类的定义中添加一个事件处理函数  this

    ```
    class EditInPlace{
        constructor(container){
            this.container = container;
            this.container.addEventListener('click',this.edit,false)
            <!-- this.container.addEventListener('click',this.edit.bind(this),false)
            this.container.addEventListener('click',()=>this.edit(),false) -->
        }
        edit(){
            console.log(this)    // this 指向 container
        }
    }
    ```
    - call  apply bind 区别
        - call  改变this指向，立即执行    
            有多个参数需要挨个写
        - apply  改变this指向，立即执行
            参数是一个数组，需要将参数放在一个数组中传递
        - bind  改变this指向，返回一个新函数，需要手动调用执行 
            bind 参数和 call一样

- cors 跨域的底层

    - 什么是跨域
    跨域是指在浏览器中，当一个网页从一个域名请求另一个域名、子域、协议、端口的服务器请求资源时，会触发浏览器的同源策略（Same Origin Policy）

    - 同源策略
        是一种浏览器的安全机制，目的是防止不同源的网页之间相互访问数据，造成潜在的安全问题

    - 请介绍下CORS
    CORS 是一种跨域资源共享协议(Cross-Origin Resource Sharing)，它允许浏览器从一个域向另一个域发送请求，即使这两个域是不同的源。它是为了解决跨域请求的限制而引入的后端解决方案。通过设置特定的HTTP响应头。服务器明确哪些域名可以访问。

    - 响应头
        Access-Control-Allow-Origin: *白名单*
        Access-Control-Allow-Credentials：true   // 允许携带cookie
        Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS(预检请求)
        Access-Control-Max-Age: 3600

    - 简单请求
    GET  、POST 、 HEAD
    请求头中只包含  Accept、Accept-Language、Content-Language、Content-Type: application/x-www-form-urlencoded、multipart/form-data、text/plain
    只通过 cors  Access-Control-Allow-Origin  响应头来允许跨域

    - 复杂请求
        如 PUT、DELETE、OPTIONS等
        浏览器在发送正式请求前，先发一个 OPTIONS 预检请求，询问请求方法，请求头等信息是否允许跨域。服务器会返回
        
        -   `Access-Control-Allow-Origin`: 指定允许访问的域名。
        -   `Access-Control-Allow-Methods`: 允许的 HTTP 请求方法，如 `GET`、`POST`、`PUT`、`DELETE`。
        -   `Access-Control-Allow-Headers`: 允许的自定义请求头（如 `X-Custom-Header`）。
        -   `Access-Control-Max-Age`: 指定预检请求的结果可以被缓存的时间，减少预检请求的频率。
        -   `Access-Control-Allow-Credentials`: 是否允许发送和接收 Cookie。

    - 预检请求



- 矩阵中找值
    - O(m x n)  暴力破解法
    - 二分查找 矩阵排好序 
    - 算法概念的本质
        - 排好序
        - 不断调整区间 （对半） ，直至 找到目标值
        - 矩阵二分查找
        - 时间复杂度  O(m+n)

#  setTimeout 在哪里执行

- 执行位置
    setTimeout  *回调函数* 会在定时时间到达后推送到宏任务队列中。
    事件循环会在处理完当前执行栈中的同步代码和微任务队列中的任务后，执行宏任务队列中的任务。

- 任务队列
    setTimeout  属于宏任务，而微任务(Promise/nextTick) 在宏任务之前执行。
    event loop 确保了任务的有序执行和异步操作的协调。


# 讲一下EventLoop
    事件循环机制 JavaScript的一个机制，用于管理和调度异步任务的操作。
    它基于单线程模型，通过维护一个调用栈和任务队列来协调代码执行。

    - 执行流程
    1.执行栈：同步代码首先被推入调用栈中执行，直到栈为空
    2.任务队列： 异步任务  (  
        微任务  Promise  MutationObserver  nextTick
        宏任务    setTimeout  setInterval  setImmediate  MessageChannel  IO  UI Rendering
           ) 在执行时不会直接进入栈， 放入任务队列
    3.事件循环： 事件循环不断地从任务队列中取出任务，将其推入调用栈执行。只有调用栈为空时，事件循环才会处理任务队列中的任务。
    4. 渲染和更新  事件循环还会在适当的时候进行渲染更新，确保界面的刷新 用户的交互部被阻塞

通过EventLoop机制  JavaScript 实现了非阻塞的异步编程模式，允许代码在等待操作完成的同时执行其他任务，提高了应用的响应性和性能






