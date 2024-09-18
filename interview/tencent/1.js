// 惰性函数
//编写一个 foo 函数，返回首次调用时的Date对象。

// var t  // 全局被污染，而且代码不好维护

// function foo(){
//     if(t) return t;
//     t = new Date();
//     return t;
// }


// var foo = (function(){
//  var t;
//  return function(){
//     if(t) return t;
//     t = new Date()
//     return t;
//  }
// }
// )()

// 函数对象
// function foo(){
//     if(foo.t) return foo.t;
//     foo.t = new Date();
//     return foo.t;
// }

// 惰性函数  重写函数
var foo = function(){
    var t = new Date();
    foo = function(){
        return t;
    }
    return foo();
}

