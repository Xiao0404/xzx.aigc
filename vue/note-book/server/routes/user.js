const router = require('@koa/router')();
const {userLofin} = require('../controllers/index.js');
const { userLogin,userFind,userRegister } = require('../controllers/index.js');
const jwt = require('../utils/jwt.js');



// 路由前缀
router.prefix('/user');

router.post('/login', async (ctx) => {
   // 从请求体重解析到前端传递的参数，去数据库查询账号密码是否合法
   const { username, password} = ctx.request.body;
   try{
    const result = await userLogin(username,password)
   console.log(result);
   if(result.length){ // 找到了
        const data = {
            id: result[0].id,
            nickname: result[0].nickname,
            username: result[0].username,

        } 
        // 生成token
      const token= jwt.sign(data)

        ctx.body = {
            code: '800',
            data,
            msg:'登录成功',
            token: token

        }
   }else{ // 没找到
    ctx.body = {
        code: '8004',
        msg: '账号或密码错误',
        data: 'error'
    }
   }
   }catch(error){
        ctx.body = {
            code: '8005',
            msg: '服务器异常',
            data: 'error'
        }
   }

});

router.post('/register', async (ctx) => {
    try{
        // 从请求体重解析到前端传递的参数，去注册账号
    const { username, password,nickname } = ctx.request.body;
    if(!username ||!password||!nickname){
        ctx.body = {
            code: '801',
            msg: '账号密码或昵称不能为空'
            
        }
        return
    }
    // 判断账号是否存在
    const findRes = await userFind(username)
    if(findRes.length){ // 账号已存在
        ctx.body = {
            code: '802',
            msg: '账号已存在',
            data: 'error'
        }
        return
    }

    // 往数据库中写入
    const res = await userRegister({username,password,nickname})
    console.log(res);
    if(res.affectedRows){
        ctx.body = {
            code: '800',
            msg: '注册成功',
            data:'success'
        }
    }else{
        ctx.body = {
            code: '803',
            msg: '注册失败',
            data: 'error'
        }
    }

    }catch(error){
        ctx.body = {
            code: '8005',
            msg: '服务器异常',
            data: 'error'
        }
    }
})

module.exports = router;