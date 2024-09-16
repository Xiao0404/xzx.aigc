class MyPromise {
    constructor(executor){
        // 定义状态
        this.state = 'pending'
        // .then中的回调
        this.onFulfilledCallbacks = []
        // .catch 中的回调
        this.onRejectedCallbacks = []

        const resolve = (val) => {
            if(this.state === 'pending'){
                this.state = 'fulfilled'
                this.value = val
                this.onFulfilledCallbacks.forEach(fn => fn())
            }
        }

        const reject = (val) => {
            if(this.state === 'pending'){
                this.status = 'rejected'
                this.value = val
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }
            executor(resolve,reject)
    }

    then(onFulfilled,onRejected){
        if(onFulfilled && typeof onFulfilled !== 'function' || onRejected && typeof onRejected !== 'function'){
            throw new Error('then必须接受一个函数')
        }
        return new MyPromise((resolve,rejected) =>{
            // 前面Promise 的状态是fulfilled
            if(this.state ==='fulfilled'){
                setTimeout(()=>{
                    try{
                        const result = onFulfilled(this.value)
                        resolve(result)
                    }
                    catch(error){
                        reject(error)
                    }
                })
            }

            // 前面Promise 的状态是rejected
            if(this.state === 'rejected'){
                setTimeout(()=> {
                    try{
                        const result = onRejected(this.value)
                        resolve(result)
                    }
                    catch(error){
                        reject(error)
                    }
                })
            }

            // 前面Promise 的状态是pending，将回调函数保存起来，等到状态改变后再执行

            if(this.status === 'pending'){
                this.onFulfilledCallbacks.push((val) => {
                    setTimeout(()=>{
                        onFulfilled(val)
                    })
                })

                this.onRejectedCallbacks.push((val) => {
                    setTimeout(()=>{
                        onRejected(val)
                    })
                })

            }
        }) 
    }

}