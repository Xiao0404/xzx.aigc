const Koa = require('koa');
const app = new Koa()
const useRouter = require('./routes/index.js');
const cors = require('@koa/cors');
// koa获取 post 请求体中的
const { bodyParser } = require('@koa/bodyparser');



app.use(cors()) // 允许跨域，先允许跨域再请求路由
app.use(bodyParser()) // 让koa 可以解析post传递的参数

// 生效路由
useRouter(app);



app.listen(3000, () => {
  console.log('项目已启动');
});