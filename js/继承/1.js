// 构造函数继承
//  解决引用类型共享问题
//  但是，无法继承父类的原型上的方法
function Parent(name){
    this.name = name;
    this.colors = ['red'];
}

Parent.prototype.say = function(){
    console.log(1);
}


function Child(name){
    Parent.call(this,name); 
}


let c1 = new Child('1');
let c2 = new Child('2');

c1.colors.push('blue');
console.log(c1.colors);
console.log(c2.colors);

c1.say(); 