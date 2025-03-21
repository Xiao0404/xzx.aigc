// 原型链继承
// 可以继承原型上的方法
// 缺点是无法向父类构造函数传参 ， 而且所有实例化子类都共享引用类型属性,继承的引用类型属性在打印对象时默认不会显示
function Parent(){
    this.name = 'parent';
}

Parent.prototype.say = function() {
     console.log(this.name);
}

function Child(){

}

Child.prototype = new Parent();

let c1 =new Child();
c1.say();