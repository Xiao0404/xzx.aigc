let a = 20;
let b= 10;
let c = 50;

function test(){

console.log(a);
this.a = 30;
console.log(this.a);

 
    
}

// test();

let ss = new test();
console.log(ss.c);