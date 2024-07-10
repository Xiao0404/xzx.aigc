# 相关推荐算法

- posts 数据源
- 大前端 (后端的文件夹放在前端里)
    v3 vue-router 单页应用
    backend(后端)  ai 推荐

- router-link 高级用法
    <router-link to"/">Home</router-link> 动态
    /user/123
    {
        name:'user',
        path:'/user/:suerID'
    }

    <router-link :to"{name :'use',params:{userID:123}}">User</router-link>



- axios vue.react 通用的请求器
    - baseURL 切换本地/线上
    - api/ 接管所有请求
        service.get()
    - 拦截器
        1.请求拦截器 Authorization
        2.响应拦截
            response.data
            统一的报错处理