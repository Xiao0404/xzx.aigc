function* gen(){
    let o=1
    let a = yield o++
    console.log(a);
    let b = yield o++
    
}

let g = gen() //迭代器 不执行
console.log(g.next());
console.log(g.next(11));

