# 1. js 数组上有哪些方法
    增：push ,unshift,splice(i,0,x),concat,
    删：pop,shift,splice,slice(左闭右开)
    改：splice，索引
    查: includes,indexOf(从前往后) 查找是否存在  /   find 返回元素   findIndex / findLastIndex (带有find的就是回调函数了) , some 找到一个就返回true , lastIndexOf 从后往前找   
        every 所有元素都满足条件返回true

    
    转换： reverse,sort,toReversed,toString 把数组的元素用逗号拼接成字符串 ,join可以任意符号, toSorted() 不修改原数组，返回排序后的新数组

    迭代： forEach,map会返回新数组 ,  filter , reduce


# 2. js 字符串上有哪些方法
增： concat, + 
删: slice 截取出来 , substring 和 slice 效果一样
改： trim 去掉空格 只去除首尾的  trimLeft/trimRight ，  padStart 往字符串头部填充 / padEnd   ,  replace 替换 元素
     toUpperCase 转大写  toLowerCase 转小写
查： indexOf / lastIndexOf ， includes 查找是否存在 ， match 查找是否存在 ， search 查找是否存在 ， split 分割 ， charAt 返回指定位置的字符 
     startWith  以什么开头 / endWith  以什么结尾

转换： split 分割 成数组

<!-- parseInt(a, 当成的进制数 0或不填都认为是10进制 ) 转化成十进制 -->

# 3.谈谈js中的类型转换机制
- 是什么：
    js中存在原始数据类型和引用数据类型，通常开发过程中可能存在人为主动将类型转换就是显示类型转换，  引用类型转基础布尔类型为 true
    js引擎 自动转换的就是隐式类型转换

- 显示: Number(xx)  String(xx)  Boolean(xx)  Array(xx)  Object(xx)  Symbol(xx)  构造函数
- 隐式:  =,-,*,/,%,if,while,==


        
        [] == ![]
        [] == false
        [] == 0
        '' == 0
        0 == 0
        
        ToNumber([])
        toPrimitive([],Number)


# 4.  == Vs ===
 左边判断值相等     右边