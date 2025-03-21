// 组合式继承
// 融合上面两种继承的优点
function Parent(name){
    this.name =  name;
    this.colors = [];
}

Parent.prototype.say = function(){
     console.log(this.name,this.colors);
}

function Child(name){
    Parent.call(this,name);
}

Child.prototype = new Parent();

let c1 = new Child('小明');
let c2 = new Child('建模');

c1.colors.push('red');
c2.colors.push('blue');

c1.say();
c2.say();