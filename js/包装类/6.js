var str = 'abc'
str += 1  // str = 'str'+1  任何对象与字符串运算结果都是字符串
var test = typeof(str)
if (test.length=== 6){
    test.sign = 'typeOf返回的结果可能是String'
}
console.log(test.sign);  // new String(test).sign
