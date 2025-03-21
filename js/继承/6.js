// 寄生组合式继承
// 完美解决所有问题，现代方案

function inherit(subType,superType){
     let prototype = Object.create(superType.prototype);
     prototype.constructor = subType;
     subType.prototype = prototype;
}

function superType(name) {
        this.name = name;
        this.color = ['blue','red']
}

superType.prototype.sayName = function(){
        console.log(this.name);
}

function subType(name,age){
        superType.call(this,name);
        this.age = age;
}

inherit(subType,superType);
subType.prototype.sayAge = function(){
        console.log(this.age);
}

let ins1 = new subType('小明','25');
let ins2 = new superType('建模','66666');

ins1.color.push('black');
console.log(ins1);
console.log(ins2);