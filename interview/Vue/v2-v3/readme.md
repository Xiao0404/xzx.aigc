#  vue2 Object.defineProperty 
    当属性被劫持后
        - 就不能用常规方法去访问。且身不由己，数据值也可能会被改变
        - 修改数据也要通过set

 1. 使用数据劫持函数，递归的劫持对象上的多层属性
 2. 直接修改数组的length属性时无效的
 3. 对象上不存在的属性无法劫持   =>  使用 this.$set(this.obj,'b',10)
 4. 重写数组上的方法


 # vue3 Proxy  

 - reactive 只能将对象转化为响应式
 - ref 才可以又原始值又对象


 - reflect  新增加在Object 上的方法都会加在 Reflect 对象上 ，以及一些可能存在问题的方法也移入Reflect
 - Proxy 支持13种拦截操作
    - 支持全部数组的方法，不需要再重写
    - 可以劫持对象的属性，优化之处在于按需递归（在get里面递归）
    - 通过WeakMap 防止 原对象被多次代理，通过WeakSet 防止被代理后的对象再被代理

# 两种的核心都是 set 和 get