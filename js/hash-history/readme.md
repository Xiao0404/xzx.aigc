# hash router

- http 协议是无状态，服务器端是不能主动向浏览器推送内容,只能通过url改变去向服务器端发送请求
- 请求新的资源 / -> /page2 ，重新发送请求
- 服务器返回所有的html
- 单页应用SPA带来的全新用户体验
    - 加载快，不会白屏 页面快一点显示是第一要义
    - url 改变 浏览器地址栏改变 但是不能去重刷新整个页面 #/page2
    - 锚链接
    - hashchange事件  ajax DOM  router-view  views/Component
- 即不能跳页，又要动态更新界面，SPA -> 手机APP常用 

- handler.call(this)
    可以在处理函数中拿到路由对象等信息
