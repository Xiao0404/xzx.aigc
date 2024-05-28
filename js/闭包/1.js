var arr =[];

// var 定义的是全局变量，let和花括号形成块级作用域
for(var i=0;i<10;i++){
    // let i 
    arr[i] = function(){
        console.log(i);
    }
}
arr.forEach(function(item){
    item();
})