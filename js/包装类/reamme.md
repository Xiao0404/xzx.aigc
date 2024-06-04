# 对象
1.对象中的key(属性)只能是字符串类型

- 创建对象的方式
1.创建对象字面量
2.new Object()
3.new XXX()


# new
1.创建一个this对象
2.执行函数中的代码 this.xx = xxx
3.return this
- // 先创建一个对象
    // 再按构造函数中的代码区执行
    // 返回这个this对象
        // var this = {
        //     this.name = 'gtr'
        // this.height = '1.5'
        // this.length = '5.0'
        // this.weight = '1000'
        // this.color=color;
        // }
        // return this


# 包装类
- 原始值对象，V8执行到包装类时会通过valueOf试探该包装类是否是原始值，
  如果是则秉承原始值不用具有属性和方法的这一规则，再移除掉给包装类添加的属性