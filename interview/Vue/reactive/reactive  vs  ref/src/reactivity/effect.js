const targetMap = new WeakMap()
let activeEffect =  null

export function effect(fn,options = {}) {
    const effectFn = () => {
        try {
            activeEffect = effectFn
            return fn()
        } finally {
            activeEffect = null
        }
    }

    if(!options.lazy){
    effectFn()
    }
}
 
// activeEffect()

export function track(target, type, key) { // 把key 用在了哪些函数中都记录下来
        // 怎么知道key 在某函数中使用了呢？

        //  targetMap = {
        //     target:{
        //         key:[effect1,effect2 ...],
        //         key2:[effect,effect2]
        //     }
        //  }

       let depsMap = targetMap.get(target)
       if(!depsMap){  // 初次加载读取值
        targetMap.set(target,(depsMap = new Map()))
       }
       let deps = depsMap.get(key)
       if(!deps){ // 当前这个key 还未添加副作用
        deps = new Set()
       }
       if(!deps.has(activeEffect) && activeEffect){
            deps.add(activeEffect)
       }
       depsMap.set(key,deps)
       console.log(targetMap);
    
}


export function trigger(target,type,key){
    const depsMap = targetMap.get(target)
    if(!depsMap) {
        return
    }

    const deps = depsMap.get(key)
    if(!deps) {
        return 
    }
    deps.forEach(effectFn => {
        effectFn()
    })
}