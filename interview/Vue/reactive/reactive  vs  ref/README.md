- shallowReactive 
浅层代理,不会递归去代理

- effect
副作用函数

- object.defineProperty()
去设置只可读

- 区别
reactive 使用 proxy 代理了对象的各种操作，在属性 读取值 判断值等行为中，为属性添加副作用函数，在属性被 修改值 删除等行为中， 触发该属性身上的绑定的副作用来实现响应式效果

ref 当参数为对象时，借助 reactive 代理响应式，当参数是原始值时，给值添加 value函数，并采用原生的 getter 和setter 方式，实现为属性添加副作用函数和触发副作用函数的能力，进而达到响应式的效果
