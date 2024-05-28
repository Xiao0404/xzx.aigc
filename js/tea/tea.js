// 茶类 首字母大写 es5
        // js 变量类型是由值决定的
        // js 除了简单数据类型，就是对象（函数是可执行的对象）
        // js 早期没有class关键字
        // js 普通函数大写就是构造函数
        // 其实 js 里面没有类 早期没有提供class
        // Tea 和绿茶之间没有血缘关系，Tea是原型对象
        // Tea 是可执行对象，构建我们的对象 this指向的这些属性就是实例的属性模板
        // Tea 通过prototype添加一些方法，都可以以它为原型的对象共享(public)

        function Tea(type){
            this.type = type;
            console.log("你准备泡一杯"+this.type);
        }

        // 对象prototype添加方法
        Tea.prototype.boilWater = function(){
            console.log("把水煮沸");
        }
        Tea.prototype.steepTeaBag = function(){
            console.log("用沸水浸泡茶叶");
        }
        Tea.prototype.pourInCup = function(){
             console.log("把茶倒进杯子");
        }
        Tea.prototype.addLemon = function() {
             console.log("向茶中加入柠檬");
        }

        // 当以 new 的方式被运行
        var greenTea = new Tea("绿茶");
        var wuLongTea = new Tea("乌龙茶");

        greenTea.boilWater();
        greenTea.steepTeaBag();
        greenTea.pourInCup();
        greenTea.addLemon();