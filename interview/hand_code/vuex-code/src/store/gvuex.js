import { reactive,inject,provide,computed } from "vue"

const STORE_KEY = '__store__'  //  provide/inject  全局属性 

export const useStore = () =>{
        return inject(STORE_KEY)
}

export const  createStore = (options) => {
    // options  是一个JSON对象  包含 state  getters  mutations  actions

    // 返回一个对象
    return new Store(options)

    
}

class Store{
        constructor(options){
        // 响应式
        // 数据状态  store.state.count
        // 面向对象的属性
        this.$options = options // 保存
        // _命名  私有类型属性
        this._state = reactive({
            data:options.state()
        }) 
        // 私有属性  通过 commit dispatch 去调用
        this._mutations = options.mutations
        this._actions = options.actions
        
        this.getters = {}
        Object.keys(options.getters).forEach(name =>{
            const fn = options.getters[name]; // 计算函数
            this.getters[name] = computed(() => fn(this.state))
        })

        }

       // es6 get set
        get state(){
            return this._state.data
            
        }

        // 确保 this 指向 store 对象
        commit = (type,payload) => {
                const entry = this._mutations[type]
                entry && entry(this.state,payload)
        }

        // 动作类型 action_name
        // payload  参数 
        dispatch(type,payload){
            const entry = this._actions[type]
           entry && entry(this,payload)

        }


        install(app){
            // key, store 对象
            app.provide(STORE_KEY,this)

        }

}