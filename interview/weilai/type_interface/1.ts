// 接口
interface IPerson {
    name: string;
    age: number;
}

const user1:IPerson = {
    name: 'zs',
    age: 18
}

type Person = {
    name: string;
    age: number;
}

const user2:Person = {
    name: 'ls',
    age: 18
}

// 类型别名，简单数据类型的支持
type MyStringType = string;
type PI = number;

