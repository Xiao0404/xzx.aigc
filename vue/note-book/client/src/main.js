import './assets/reset.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible.js'
import { Button } from 'vant';
import 'vant/lib/index.css';
import { Form, Field, CellGroup,Icon } from 'vant';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Icon);

// 挂载代码在最后一行
app.mount('#app')
