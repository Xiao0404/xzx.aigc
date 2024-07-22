# 组件通信
1. 父子通信 
    - 父组件传值，子组件通过 defineProps 接受  -> demo1
    - 父组件传值去修改子组件的属性，再通过子组件渲染 onBeforeUpdate 去触发  -> demo2
    - inject 只能长辈传递(provide)给子组件注入(inject)，不管是几级的父组件 provide ,只要是子孙组件都可以通过 inject 去获取 -> demo6
2. 子父通信 
    - 通过发布订阅机制，父组件订阅一个事件，子组件发布该事件并且将要传递的值一起发布出来，父组件在定义函数中获取该值  -> demo3
    - 发布订阅再优化一下，就是父组件的用 v-model 绑定 属性传给子组件（相当于 @update=""）,子组件继续发布事件 defineEmits(['update:xxx']) 通知父组件数据更新了  -> demo4
    - 父组件通过 ref 获取到 子组件的 dom 结构，从而获取到子组件 defineExpose() 暴露出来的数据  -> demo5