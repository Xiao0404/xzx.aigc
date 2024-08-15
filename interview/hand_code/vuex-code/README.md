## 读 vuex 源码

- es6  class 
    - 组织 install  dispatch  commit  等方法  面向对象思想
    - this._state  私有变量封装响应式的细节
    - get state()  简化调用API ，暴露 state  方便外部调用 不提供修改 state(set state)  要修改，走 mutations
    - 私有属性的魅力, mutations actions 都不可以直接调用  先用私有属性存下来 再用 dispatch commit 去调用
    - getters public 公有属性  外部只读  
        Object.keys() 拿到 option.getters 所有的 key
        遍历一下 拿到 fn  并通过 computed 返回一个方法，将 this.state 传过去   computed 理解更透了 
