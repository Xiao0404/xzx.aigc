# 回调
    - 问题：回调地狱

# promise
1. promise 具有三种状态 'pending' 'fulfilled' 'rejected'
2. promise 要保证接收的回调函数在触发时，有resolve,reject 两个函数体作为参数
3. resolve 负责执行then 中的回调，并且将参数传给 then 中的回调，并且修改 promise 的状态为 fulfilled


# generator
1. 分段执行，可以暂停
2. 可以知道是否执行完毕
3. 控制每个阶段的返回值


# async/await