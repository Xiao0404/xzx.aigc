function A(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('异步A');
           
            resolve();
        }, 1000);
    })
}
function B(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log('异步B');
            
            resolve();
        },1000)
    })
}

function C(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log('异步C');
            
            resolve()
        },500)
    })
}
