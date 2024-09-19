// vue3 99% 的代码是用 TS 写的,vue3 的类型系统
import type { App } from "vue";
import Dialog from './Dialog.vue' // 组件对象 

export default {
    install (app:App){
        // 声明一个全局组件
        // ts 功底  ts 比 js 开发效率高 ，类型推断(tab 补全,api 提示)
        // 类很多，来自于好多同事的合作
        app.component(Dialog.name as  string, Dialog )

    }
}