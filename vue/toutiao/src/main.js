import { createApp } from 'vue';
import '@/assets/tailwind.css';
import '@/assets/reset.css';
// 引用阿里的库 响应式改变字体大小
import 'lib-flexible/flexible.js';
import App from './App.vue';
import router from './router/index';
import 'vant/lib/index.css';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { Lazyload } from 'vant';
const pinia = createPinia();
const app = createApp(App);
app
    .use(ElementPlus)
    .use(router)
    .use(pinia)
    .use(Lazyload)
    .mount('#app');
