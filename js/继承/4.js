// 原型式继承
// 也是引用类型的数据是共享的,同样无法传递参数

function object(obj){
    function F(){};
    F.prototype = obj;
    return new F();
}

let person = {
    name: 'li',
    friends: ['xyao','ajax']
}

let bob = object(person);
bob.name = 'bob';
bob.friends.push('alex');
console.log(person);
console.log(bob);
console.log(bob.friends);