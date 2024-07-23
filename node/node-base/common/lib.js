function add(a,b){
    return a+b
}

// 直接抛出函数
// module.exports = add

// 抛出对象
// 模块化抛出，优先级更高
module.exports = {add} 

// exports.hello = 'world'