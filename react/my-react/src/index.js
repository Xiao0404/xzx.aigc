// 入口文件
// console.log('hello');
//  es6 module  dom 相关
import ReactDOM from 'react-dom/client';
import React from 'react';
// root 内部就是react的世界了
// root react 的根节点

const root = ReactDOM.createRoot(
  //获取挂载点，以后react 就不再做DOM操作 (DOM操作很耗性能)
  document.getElementById('root')
)

//  react 法宝 JSX语法
// 不是纯js，react jsx语法 js里表达的html的

// root.render(<h1>开始</h1> )
// 节点
const element =  React.createElement('h1',null,'起始')
root.render(element)
//也可以这样写
const element1 = (<h1>开始</h1>)
root.render(element1)
console.log(element1);

const element2 = React.createElement('div',{id:'name'},'名字')
console.log(element2);
root.render(element2);