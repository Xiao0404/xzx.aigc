# 存储
cookies                     localStorage           sessionStorage              IndexDB
服务端设置                  一直存在               当前页面关闭就消失          一直存在
4K                          5M                    5M                         无限大  
每次自动携带在http请求头中       不参与跟后端的             不参与                   不参与
                            通信
默认不允许跨域                可以跨域               不可以跨域，                   默认不可跨域
但可以设置                                                二级域名也不可以


# cookies
1. value: cookie(加密过的用户标识)
2. http-only: 不允许js 访问
3. secure: 只能HTTPS 协议携带
4. same-site: 规定浏览器不能在跨域请求中携带cookie  