
// 引入

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/reset.css'

import { Button } from 'vant';
import 'vant/lib/index.css';  // 通用的样式

import { Area,ActionSheet  } from 'vant';



const app = createApp(App)

app.use(router)
app.use(Area);
app.use(ActionSheet);

app.mount('#app')
