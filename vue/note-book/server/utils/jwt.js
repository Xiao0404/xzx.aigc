const jwt = require('jsonwebtoken')

function sign(option){
   return jwt.sign(option,'666',{
        expiresIn:60*60*24

    })  // 加盐 混进加密的信息中
}

module.exports = {
    sign
}