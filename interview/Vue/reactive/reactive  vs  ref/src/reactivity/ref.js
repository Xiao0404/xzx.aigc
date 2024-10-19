import {track,trigger} from './effect'
import { isObject } from '@/shared'
import { reactive } from './reactive'
export function ref(value){
    return createRef(value)
}


function createRef(value){
        if(isRef(value))  {
            return val
        }
        return new RefImp(value)
}

function isRef(val){
    return  !!(val && val.__v_isRef)  // 如果val没被代理成 ref ，则val.__v_isRef 为undefined 用!!转换成布尔类型

}


class RefImp{
    constructor(value){
        this._val = convert(value)  // 原始类型
        this.__v_isRef = true
    }

    get value(){
        track(this,'get','value')
        return this._val
    }

    set value(newVal){
        this._val = newVal 
        // 视图更新
        trigger(this,'set','value') // 触发依赖
    }

}
function convert(val){
    return isObject(val) ? reactive(val) : val
}
