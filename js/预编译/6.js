// var a=2
// function add(){

//     var b=10;
//     return a+b;
// }
// console.log(add());

var a=2;
function add(b,c){
    return b+c;
}
function addAll(b,c){
    var d=10;
    var result = add(b,c);
    return a+result+d;

}

addAll(3,6);