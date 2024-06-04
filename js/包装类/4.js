var num = 123
num.a = 'aaa'
// console.log(num.a);
// 原始值是不能拥有属性和方法，只有对象拥有

// 拥有构造函数的只有 number boole string

// Number()

var num = new Number(123) //数字对象
//  console.log(num*2); //246，进行四则运算时会被当作一个数字字面量
num.a = 'aaa'  // 当添加属性时，num被当作对象
// console.log(num.a);

var str = 'abcd'   // var str = new String('abcd') 
// length 在String 构造函数中有
// console.log(str.length);

var num = 4 //  -> 相当于构造函数 new Number(4)
num.len=3  // new Number(4).len=3
// 判断合法性
// delete num.len 移除属性
// console.log(num.len);

// 在对象中的属性没有赋值就是undefined
// 如果要添加一个属性，必须以键值对的方式添加 obj.a =123
var obj ={}

// console.log(obj.a,obj);