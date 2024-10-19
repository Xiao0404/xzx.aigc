let obj = {
    a:1,
    b:2,
    get value(){
        return this.a
    },
    set value(val){
        this.a = val
    }
}

    obj.value = 100

 console.log(obj.value);
