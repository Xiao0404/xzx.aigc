// subject
class subject{
    constructor(name){
        this.name = name;
        this.state = '开心';
        this.observers = [];
    }

    attach(observer){
        this.observers.push(observer)
    }

    setState(state){
        this.state = state;
        this.observers.forEach(ob => ob.update(this))

    }
}


class observer{
    constructor(name){
        this.name = name;
    }

    update(subject){
        console.log(`${this.name}观察到 ${subject.name} 状态变为了 ${subject.state}`);
        
    }

}

let sub = new subject('小明')
let ob = new observer('妈妈')

sub.attach(ob)

sub.setState('难过')