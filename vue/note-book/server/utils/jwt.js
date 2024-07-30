const jwt = require('jsonwebtoken')

function sign(option){
   return jwt.sign(option,'666',{
        expiresIn:60*60*24

    })  // 加盐 混进加密的信息中
}


function verify(){
    return async (ctx,next) => {
        // 前端 A   后端 a
        const jwtToken = ctx.req.headers.authorization
       if(jwtToken) {
       try{
        const decode = jwt.verify(jwtToken,'666')
        if(decode.id){ // 合法
            ctx.userId = decode.id
            ctx.nickname = decode.nickname
    

          await next()
          // await 会让 next 立即执行
          
        }
       }catch(error){
            console.log(error)
            // http 中 401 状态码为没有权限
           

            ctx.body={
                code: '809',
                msg: 'token失效',
                data: error
            };
            
       }
       }else{
        ctx.body = {
            code: '808',
            msg: 'token不存在,请提供token'
            

        }
       }
      

    }
}

module.exports = {
    sign,
    verify
}