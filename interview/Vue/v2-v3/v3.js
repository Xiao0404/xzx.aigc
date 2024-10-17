
let toProxy = new WeakMap()  // 原对象 ： 代理对象
let toRow = new WeakSet() // 对象代理


function isObject(val){
    return typeof val === 'object' && val !== null 
}

function reactive(target){
    return createReactiveObject(target)
}

function createReactiveObject(target){
        if(!isObject(target)) {
            return target
        }

        // 防止原对象被多次代理
        let proxy = toProxy.get(target)
        if(proxy) {
            return proxy
        }
        // 防止被代理后的对象，再次被代理
        if(toRow.has(target)){
            return target;
        }

        let baseHandler = {
            get(target , key , receiver) {
                console.log("读取");
                
                let result =   Reflect.get(target,key)   // target[key]  // 不会无限递归
                return isObject(result) ? reactive(result) : result  // 按需递归
            },
            set(target, key , value , receiver) {
                console.log("修改");
                
               let result =   Reflect.set(target, key , value ,receiver)  // 将target 中的key值修改为value
               return isObject(result) ? reactive(result) : result
            }
        }

       // 对象代理
        let observed = new Proxy(target,baseHandler)
        toProxy.set(target,observed)
        toRow.add(observed,target)
        return observed
}




let obj = {
    a: 1,
    b: 2,
    c: {
        n: 3
    },
    d: ['a','b','c']
}

let proxy = reactive(obj)
// proxy.c.n = 300 
// console.log(proxy.c.n);

    // proxy.d = [1]
    // proxy.d[0] = 'bb'
    // proxy.d.push('e')

    // let proxy2 = reactive(proxy)
    // proxy.d.length = 4
    proxy.e = 8