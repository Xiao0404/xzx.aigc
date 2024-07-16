# vuex 带来了数据流管理

- 小项目不需要用vuex/pinia , 但是大型项目需要用vuex/pinia 管理好数据

- 专业打理数据流
- 把数据收归中央
    归财务管 向财务申请  按规定


- npm i vuex
    插件 install use

- 读取一个状态
    useStore
    computed store.state.count
- 写状态
    store.dispatch('increment') dispatch 一个 action 
    action 执行一下 最后一定执行commit(action可以直接解构)  提交修改
    mutation 修改状态 (commit是在mutations中定义的)
    state 发生改变，所有用到它的地方全部更新