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
    ElIcon,
    ElAvatar,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
    ElMenu,
    ElMenuItem,
    ElSubMenu
} from 'element-plus'
// 组件库依赖的样式
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
// * as 引入全部组件库
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/styles/variable.css'

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
    .use(ElAvatar)
    .use(ElDropdown)
    .use(ElDropdownMenu)
    .use(ElDropdownItem)
    .use(ElMenu)
    .use(ElMenuItem)
    .use(ElSubMenu)
    
   // 自定义指令
   import { usePermissStore } from './store/permiss'
   const permissStore = usePermissStore();
   app.directive('permiss',{
      // v-if  v-show  el 承载指令的节点  binding  绑定的属性，就是传递的值
      mounted(el,binding){
            if(binding.value && !permissStore.key.includes(String(binding.value))){
               el['hidden'] = true
            }
      }
   })


    app
       .mount('#app')