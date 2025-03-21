// 寄生式继承
// 在原型式继承的基础上封装了一个增强函数，添加了一些方法或属性
// 特点和原型式一样

function object(obj){
    let clone = Object.create(obj);
    clone.sayHi = function (){
        console.log('hello');
    }
    return clone;
}

let obj = {
    name: 'lee',
    friends: ['11','ss']
}


let person = object(obj);
person.friends.push('rinze')
person.sayHi();
console.log(obj);