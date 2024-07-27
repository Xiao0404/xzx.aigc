- 导入
    - fs模块
    - path模块

- 路径
            这里的路径填绝对路径，当node感知的目录发生改变可能会出现问题
            const content =  fs.readFile(_path,{encoding:'utf8'},(err,data) =>{
                if(!err){
                    console.log(data);

                }
            })


- 正则
    - 语法
     /\d/g  匹配所有数字   /  / 中的是匹配的内容

   new RegExp('1','g')  1是要求，g 是全局匹配
   将字符串中的数字换成 'x'
   let reg = new RegExp('\d','g')
    s.replace() 

- 循环
    - for in
    - for of
    - forEach

- 数据类型判断
    typeof  只能判断基本数据类型
    instanceof  只能判断对象类型
    Object.prototype.toString.call()  可以判断所有数据类型
    Array.isArray()  只能判断数组类型
    