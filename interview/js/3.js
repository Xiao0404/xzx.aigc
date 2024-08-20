Object.prototype.c = 1;

let obj = {
    a:1,
    b:{
        n:2
    }
}

// 浅拷贝

// function clone(obj){
//     let newObj = {}
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             newObj[key] = obj[key]
//         }

//     }
    
// }


// 深拷贝

// function deepClone(obj){
//     let newObj = {}
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             if(typeof(obj[key])==='object'){
//                 newObj[key] = deepClone(obj[key])
//             }else{
//                 newObj[key] = obj[key]
//             }
//         }

//     }
//     return newObj;

// }


function deepClone(obj){
    return new Promise(resolve => {
        const {port1,port2} = new MessageChannel()
        port1.postMessage(obj)
        port2.onmessage = (e) => {
            resolve(e.data);
        }
    })
}

deepClone(obj).then(res => {
    console.log(res);
})