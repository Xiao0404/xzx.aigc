# 说说你对css盒子模型的理解
1. 是什么
    当浏览器在渲染一个html容器时，会根据某一个标准来绘制出一个矩形，该矩形包含 content padding margin border 等元素。

2. 原理(有哪些盒模型)
    - 标准盒模型（谷歌）
        width = content    总体宽度 = content + border + margin
       ![alt text](image-1.png)

    - IE 盒模型 
        width = content + border + padding 
        总宽度 = content + border + padding + margin
   

3. 应用场景
 如何切换盒模型
    - 标准盒模型
        box-sizing: content-box;
    - IE盒模型
        box-sizing: border-box;


# 说说css中的选择器有哪些？优先级是怎么样的？
    1. id
    2. class
    3. 标签
    4. 后代选择器的权重高不高取决于有没有 id  ，两代的打不过三代
    5. 子集选择器 .class > .class 只选择父类标签的儿子标签，孙子以及更深的标签不会被选取
    6. 兄弟选择器 选后面的相邻的兄弟，选two
         .one + .two{
            color: red;
         } 
    7. 群组选择器
    8. 伪类选择器
    9. 伪元素选择器 .class::before 
    10. 属性选择器 给要修改样式的元素添加属性 data-index ，style 中 .class[data-index]
    11. !important 最高权重




    - 能改得动字体的属性可以继承
        - font-size
        - font-family
        - color
        - font-weight
        - text-align: center;
        - decoration

    - 且集成优先继承父类的
    - important > 内联 > id  >  class > 后代选择器 = 子集选择器 = 兄弟选择器（顺序放后面的会优先） > tag > * > 继承 > 默认

# 说说em、px、rem、vw、vh的区别
    - 是什么：都是css中的单位，这些单位灵活使用可以做不同的适配
    - 区别：
        - em 是相对父元素的字体大小  1em = 父元素的字体大小
        - px 是固定的像素
        - rem 是相对根元素的字体大小
        - vw 是相对于视窗宽度的百分比
        - vh 是相对于视窗高度的百分比-

# css中有哪些隐藏容器的方式？区别是什么？
        1. display: none;  dom 结构在 无文档流，不能绑定事件
        2. opacity: 0;  透明度为0, 占据文档流，可以绑定事件
        3. width: 0;  height: 0;   不占据文档流
        4. visibility: hidden;    高度为0，不占据文档流，不能绑定事件
        5. clip-path: polygon();  多边形裁剪,裁剪的必须是封闭，有文档流，不可以绑定事件

        
# 两栏布局
    利用浮动，将左边元素宽度设置为200px，并且设置向左浮动。将右边元素的margin-left设置为200px，宽度设置为auto（默认为auto，撑满整个父元素）。

    利用浮动，左侧元素设置固定大小，并左浮动，右侧元素设置overflow: hidden; 这样右边就触发了BFC，BFC的区域不会与浮动元素发生重叠，所以两侧就不会发生重叠。

    利用flex布局，将左边元素设置为固定宽度200px，将右边的元素设置为flex:1

    利用绝对定位，将父级元素设置为相对定位。左边元素设置为absolute定位，并且宽度设置为200px。将右边元素的margin-left的值设置为200px。

# 三栏布局
    利用绝对定位，左右两栏设置为绝对定位，中间设置对应方向大小的margin的值。

    利用flex布局，左右两栏设置固定大小，中间一栏设置为flex:1。

    利用浮动，左右两栏设置固定大小，并设置对应方向的浮动。中间一栏设置左右两个方向的margin值，


# 弹性布局
flex-grow：指定 Flex 项目在空间分配时的放大比例。
flex-shrink：指定 Flex 项目在空间不足时的收缩比例。
flex-basis：定义 Flex 项目在主轴上的初始大小。
flex：flex-grow, flex-shrink, 和 flex-basis 的缩写属性。

