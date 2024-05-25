// var a;

// console.log(a);

//  a = 1;

// 可以先调用再定义
// 函数的声明也会提升



var a = 1;

function foo(){
     var a =1 ;
     function a(){
        console.log(a);
     }
}
foo(3);