import { createApp } from 'vue'
// 引入Vue组件库  70%的组件有组件库提供了
import { 
    ElButton, 
    ElForm,
    ElFormItem
} from 'element-plus'
// 组件库依赖的样式
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

 const app = createApp(App)
 app
    .use(router)
    .use(ElButton)   
    .use(ElForm)
    .use(ElFormItem)
    .mount('#app')
