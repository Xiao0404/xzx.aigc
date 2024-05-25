function fn(a){
            console.log(a);
            var a = 123;
            console.log(a);
            function a(){}  // 函数声明
            console.log(a);
            var b = function(){} // 函数表达式
            console.log(b);
            function d(){} // 函数声明 
            var d =a;
            console.log(d);
}

// 函数执行前的预编译
// AO :{
//      a : undefined -> 1 -> function() {}
//      b : undefined
//      d : undefined -> function() {}
// }

fn(1);