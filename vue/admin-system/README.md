# v3 后台管理系统

- 实习项目，外包必备
    - 后台出了问题，不是大事
        给小编、销售、老板 用的，与用户端产品联动
    - 无论什么项目都要有个后台
        外包 加个需求

- VUE 组件库 ElementPlus
    - 引入  main.js  
        import ElementPlus from 'element-plus'
        import 'element-plus/dist/index.css'
        use(ElementPlus)
    -  ElementPlus 太大了，性能太慢了
    - 按需 加载 一个一个use
                import { 
            ElButton, 
            ElForm,
            ElFormItem
        } from 'element-plus'

- 路由 
    - 放心使用history 不用care hash的兼容性
    - 路由守卫
        - 权限 登录
        - 身份权限 admin user 
         