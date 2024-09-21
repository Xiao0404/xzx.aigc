// - 括号的匹配
// - 排序
// - 斐波那契
// - 递归 
//   - 重复计算 爆栈 (push 执行栈)
//   - dp  


// function fib(n){
//     if(n===0 || n===1) return 1;
//     return fib(n-1)+fib(n-2);
// }
    
// 递归的概念  自顶向下思考   退出条件，递归公式。
// 重复计算 爆栈 
// 换一种思想   自底向上 推导   动态规划


function fib2(n){
    if (n<=1) return 1;
    let fib = [0,1]
    for(let i=2;i<=n;i++){
        fib[i] = fib [i-1] + fib[i-2]
    }
    return fib[n]
}