// 对象没有作用域
var xyao = {
    name: '萧',
    age: 18,
    sex:'boy',
    health:100,
    drink:function(){
        console.log('I am drinking');
        this.health++;
    },
    smoke:function(){
            console.log('I am smoking');
            this.health--;
    }
  }
  console.log(xyao);

//   xyao.like = 'long'
//   var abc = 'like'
//   console.log(xyao);

//   xyao.abc = 'niu'
//   console.log(xyao);

//     [] 
//   xyao[abc] = 'feng';
//   console.log(xyao);

//   // '' 里是属性
//   xyao['abc'] = 'nbie';
//   console.log(xyao);

//   xyao['age'] = 19;
//   console.log(xyao);

//   delete xyao.sex;
//   console.log(xyao);

xyao.smoke();
console.log(xyao.health);
xyao.drink();
console.log(xyao.health);