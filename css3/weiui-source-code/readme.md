# 如何入手微信生态css开发

## WEUI第一个组件button 

- weiui
    微信UI库

- button
    - 标签
    页面由标签组成， -> 士兵
    - 组件
    页面由组件组成， -> 编队

- BEM 命名国际规范
    - 新手在写页面时，结构不会由问题，取类名时会浪费时间 (元素间不关联，每个取独立的名字)
    - Block Element 隶属关系用__
    - page   Block  区块
    - __hd  __bd  __title  __desc   Element 子元素 用下划线
    - Modifier 
        状态，_primary _default  

- html 语义化标签
    p div 区别

- demo
    .cells  block
        .cells__title
        .cell
            .cell__hd
            .cell__bd
            .cell__ft
