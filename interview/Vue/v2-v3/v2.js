let  obj = {
    a:1,
    b:2,
    c :{
        n:3
    },
    d:['1','2','3']
}


let oldArrayPrototype = Array.prototype
let proto = Object.create(oldArrayPrototype)

Array.from(['push','shift','pop','unshift']).forEach((method) =>{
    // 函数劫持，重写函数
    proto[method] = function(){
        oldArrayPrototype[method].call(this,...arguments)
        updateView()
    }
})

function updateView() {
    console.log('更新视图');
}

// 观察者
function observer(target){
    if(Array.isArray(target)){
        target.__proto__ = proto  // 重写数组原型
        return
    }
        for(let key in target){
            defineReactive(target,key,target[key])
        }
}

function defineReactive(target,key,value) {
    if(typeof value === 'object' && value !==null){
        observer(value)
    }
    Object.defineProperty(target,key,{
        get(){ // 取值
            return value;
            // return obj.a  会无限递归，死循环
        },
        set(newVal){ // 设置值
          if(newVal !== value){
                value = newVal
                updateView()
          }
        }
    })
}

observer(obj)


    // let value = obj.a
    // // 数据劫持
    // Object.defineProperty(obj,'a',{
    //     get(){ // 取值
    //         return value;
    //         // return obj.a  会无限递归，死循环
    //     },
    //     set(val){ // 设置值
    //         value = val
    //         //  obj.a = val 同样也不能
    //         updateView()
    //     }
    // })

//     obj.a = 100
//     obj.b = 200
//    console.log(obj.a);
//    console.log(obj.b);
 
 obj.d.push('4')
    // obj.d[0] = '100'
        
   
   