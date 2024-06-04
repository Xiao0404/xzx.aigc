// var str = 'hello'; // new String



// var obj = {}  //创建对象字面量 
// var obj2 = new Object()     
function Car(color){
    // 先创建一个对象
    // 再按构造函数中的代码区执行
    // 返回这个this对象
        // var this = {
        //     this.name = 'gtr'
        // this.height = '1.5'
        // this.length = '5.0'
        // this.weight = '1000'
        // this.color=color;
        // }
        // return this

        this.name = 'gtr'
        this.height = '1.5'
        this.length = '5.0'
        this.weight = '1000'
        this.color=color;
}

let car =  new Car('purple');
console.log(car);

var car2 = new Car('white');
console.log(car2);