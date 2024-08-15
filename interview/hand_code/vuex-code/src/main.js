import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store/index'



createApp(App)
//  调用install 去挂载  vue 和其他生态的接口
    .use(store)
    .mount('#app')
