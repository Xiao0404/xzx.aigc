// const co = require('co')

function co(generatorFunction){
    return new Promise((resolve) => {
        const g = generatorFunction()
        
        function next(value){
            const { value:result,done } = g.next(value)
            if(done){
                resolve(result)
            }else{
                Promise.resolve(result)
                    .then(next)
            }
        }
        next()
    })
}

function asyncFunction(value){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(value)
        },1000)
    })
}

function* gen(){
    const result1 = yield asyncFunction(1)
    const result2 = yield asyncFunction(2)

    return result1 + result2 
}

co(gen)
    .then(res => {
        console.log(res);
        
    })