import { createApp } from 'vue'
import {createPinia}  from 'pinia'
// 引入Vue组件库  70%的组件有组件库提供了
import { 
    ElButton, 
    ElForm,
    ElFormItem,
    ElInput,
    ElCheckbox,
    ElLink,
    ElIcon
} from 'element-plus'
// 组件库依赖的样式
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
// * as 引入全部组件库
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

console.log(ElementPlusIconsVue,'///');


 const app = createApp(App)
    
 // 注册全部组件库
 for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
    // app.component()这个函数需要的两个参数是 key 和 component ,用entries 将对象拆分成这样的格式去注册
 }

 app
    .use(createPinia())
    .use(router)
    .use(ElButton)   
    .use(ElForm)
    .use(ElFormItem)
    .use(ElInput)
    .use(ElCheckbox)
    .use(ElLink)
    .use(ElIcon)
    .mount('#app')
