/**
 * 将URL query string 解析为对象
 * ？key = val & key2 =val2
 *  a=1  b=true c=[4,5]
 */

function paresParam(url){
    // ? 后面的字符串
    const paramStr = /.+\?(.+)&/.exec(url)[1];  // 括号将括起来的内容作为数组的一项
    // . 匹配任何一个字符
    // + 匹配一个或多次
    // ？ 匹配一次或零次
    // \? 转义 匹配问号本身
    // (.+$) 匹配到字符串结尾一个或多个任意字符
    // 分组

    console.log(paramStr);
    
    let paramsObj = {}
    return paramsObj
}

paresParam('http://www.baidu.com?a=1&b=2&c&d=4&d=5')