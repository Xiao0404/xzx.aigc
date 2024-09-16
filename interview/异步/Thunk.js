function A(cb){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('异步A');
            cb()
            resolve();
        }, 1000);
    })
}
function B(cb){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log('异步B');
            cb()
            resolve();
        },1000)
    })
}

function C(cb){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log('异步C');
            cb()
            resolve()
        },500)
    })
}



function simpleThunk(fn){
    return function(callback){
        fn(function(result){
            callback(result) 
        })
    }
}

// const foo1 =  simpleThunk(A)
// const foo2 =  simpleThunk(B)
// const foo3 =  simpleThunk(C)

function * example(){
    yield simpleThunk(A)
    yield simpleThunk(B)
    yield simpleThunk(C)
}

function run(generatorFunction){
    const g = generatorFunction()
    // g.next().value()

    // 递归一直使得 迭代器执行完毕
    // 迭代器执行完毕后，done为true
    function iterate(g){
        const {value,done} = g.next() // {value:function(callback), done:false}
        if(done) return 
        if(typeof value === 'function'){
            // 只有当函数执行完毕后，才会继续递归
            value(()=>{
                iterate(g)
            })
        }else{
            throw new Error('Generator function should return a Thunk function')
        }
    }

    iterate(g)
}

// run (example)

// async function bar(params){
//     await A()
//     await B()
//     await C()
// }
// bar()