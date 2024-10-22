- 整篇 html 被 vue 当做 字符串读取，vue特有的语法被解析出来，生成 DOM 结构（虚拟DOM）结构

- 先 complier-core 生成虚拟dom（用js对象描述dom）
- 再 complier-dom 生成真实dom
- 再去挂载


# Diff
    原生成了一段虚拟dom，后修改有生成了一段虚拟dom，找出新老虚拟dom树，需要保留，需要修改的

    - 虚拟DOM 树的同层比较
    - 节点比较 (sameVnode())
        - 先比较 key 是否相等
        - 再判断标签名
        - 再判断各种属性
        - 再判断 data 是否是undefined
        - 再判断 input框是否完全一致
        
    - 当根节点一致
        - 如果新的 vnode 是文字节点
        - 如果新的 vnode 不是文字节点 就对比
        - 如果新的 有 children 老的没有  直接用新的 vdom 生成真实dom
        - 如果新的没有 children，老的有 children     删除老 vdom 中的节点
        - 如果新的有children ， 老的也有 children ，则启用 diff算法 (updateChildren)   找出可复用的子节点
            - 父级节点不一样，子节点就不用比较了

- v-for 中，不写key ，每个节点会自动生成一个按索引生成的key

# 为什么不能用 index做key
    数组的元素的移动不会带来 index 值的移动，又因为vue 中判断两个节点是否相同时首先判断的是节点上的key是否相等，
    当只存在元素移动位置时会导致新老节点判断为不相等，进而无法实现复用。

    也不可以用随机数做key

# virtual DOM 的优点是什么？
1. 减少回流次数 
    现在的浏览器，会有个 回流队列，会将集中的回流行为存起来，一起拿出来回流
2. 


