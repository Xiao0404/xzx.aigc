function myPromiseAll(promises){
    return new Promise((resolve,reject)=> {
        if(!Array.isArray(promises)){
            return reject(new TypeError('参数必须是数组'))
        }
       // 保存所有 Promise 结果
       let results = [];
       // 记录已完成的 Promise 数量
       let computed = 0;
       // 记录总 Promise 数量
       const total = promises.length;

       // 如果数组为空，直接返回一个已解析的 Promise
       if(total === 0){
        return resolve(results)
       }

       // 遍历所有传入的 Promise
       promises.forEach((promise,index) => {
        // 确保每一个都是 Promise实例
        Promise.resolve(promise)
        .then(value => {
            // 记录每一个 Promise 的结果
            results[index] = value;
            computed++;

            // 如果所有 Promise 都已完成，返回结果
            if(computed === total){
                resolve(results);
            }

        })
        .catch(error => {
            // 如果任何一个 Promise 被拒绝，返回拒绝的 Promise
            reject(error);
        })
       })

    })
}