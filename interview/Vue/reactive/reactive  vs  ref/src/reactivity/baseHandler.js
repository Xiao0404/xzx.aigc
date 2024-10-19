import {reactive, ReactiveFlags,reactiveMap, shallowReactive, shallowReactiveMap} from './reactive'
import { isObject } from '../shared/index.js'
import {track} from './effect'
import {trigger} from './effect' 

const get = createGetter()  // 读取的拦截函数
const set = createSetter()  // 设置的拦截函数
const shallowReactiveGet = createGetter(true)


function createGetter(shallow = false){
    return  function get(target,key,receiver){
        // 判断target 是否被代理过
            const isExistMap = () => 
                key === ReactiveFlags.RAW && 
            (
                receiver === reactiveMap.get(target) || 
                receiver === shallowReactiveMap.get(target)
            )

        // 是否2次代理
        if(key === ReactiveFlags.IS_REACTIVE){
            return true
        }else if(isExistMap()){
            return target
        }
            const res = Reflect.get(target,key,receiver)
            console.log('读取值');
            // 收集副作用函数
            track(target,'get',key)


            if(isObject(res)){
                return shallow ? res : reactive(res)  // 递归
            }

            return res;
    }
}

function createSetter(){
        return function set(target,key,value,receiver){
            const res = Reflect.set(target,key,value,receiver)
            console.log('修改值');
            // 修改某个变量的值是，触发它身上的副作用函数
            trigger(target,'set',key)
            return res
        }
}


export const mutableHandlers = {
    get,
    set
}

export const shallowReactiveHandlers ={
        get: shallowReactiveGet,
        set
}