

# 时钟项目知识点总结

## HTML 结构
- `<!DOCTYPE html>`: 声明文档类型和 HTML 版本。

- `<html>`: 根元素，包含整个页面的内容。

- `<head>`: 包含了文档的元（meta）数据，如 `<meta>` 标签定义字符集和视口设置。

- `<title>`: 定义了文档的标题。

- `<link>`: 用于链接外部资源，如 CSS 文件。

- `<body>`: 包含可见的页面内容。

- `<div>`: 用作其他 HTML 元素的容器。

- 标签
1.块级标签 （div,p） 独占一行
2.行内块级标签  (input)  可以和行内块级或行内标签在同一行，且可以设置宽高
3.行内标签   (span)    可以和行内块级或行内标签在同一行，不可以设置宽高

## CSS 样式
- `*`: 通配符选择器，用于选择所有元素。

- `margin` 和 `padding`: 控制元素的外边距和内边距。

- `display: flex`: 应用了弹性盒模型，用于创建灵活的布局。

- `justify-content` 和 `align-items`: 控制弹性容器中项目的对齐方式。

- `border-radius`: 生成圆角边框。

- `position`: 元素的定位属性。
一般的标签都是从上往下依次渲染的，不会发生重叠，但是如果使用absolute的话可以使该标签脱离原本的流程且只会相对于父级有relative属性的标签排放。body标签默认是relative。（relative不会脱离原本的流程）

- `transform`: 平移，可根据x,y,z轴平移。rotateX(deg)

- `transition`: 定义元素的过渡效果。

## JavaScript 功能
- `document.querySelector`: 选择文档中的元素。

- `new Date()`: 创建一个新的日期对象，表示当前的日期和时间。

- `getSeconds`, `getMinutes`, `getHours`: 从日期对象中获取秒、分、小时。

- `style.transform`: 修改元素的样式，应用转换。

- `setInterval`: 定时器，定期执行函数。




