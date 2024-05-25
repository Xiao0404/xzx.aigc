# 豆瓣电影
    从编程思维来到AI思维
https://movie.douban.com/chart

## 爬虫问题

- url 发出http请求  拿到html字符串
- 对字符串做查找正则
    伪代码
    - 聚焦   .article  movies列表
    - table  列表  电影列表
    - title  
- 电影列表
     JSON数组
    [{
        name:'破墓',
        pic: '',
        desc: '',
        score: ''
    },
    ]

## 编程素养
    - 本质和解决方案   http请求   408
    - 按代码顺序，细分 -> 语句(语言，语法)
        伪代码
    - 调试并返回结果

    - npm init -y 初始化项目
    - npm install x-crawl 爬虫模块

## AIGC素养
    有哪些编程模块可以被替代？ 50%的编程流程
    ### 现在可以基于LLM大模型编程(全网知识)
    - chatgpt
        openai  aigc 自然语言处理
    - 一些coding 编程流程工作 http 请求
    - html字符串响应后  AIGC 生成式 优于传统流程
    - 电影对象组织
        详细清晰的表达需求，交给LLM即可
        封装，编写 Prompt  AI代码
        -有一段movie html 喂数据
        - 告诉LLM 它是什么
        - 标题，图片。。。。
        - 返回


## 总结
- LLM大模型优先
    - 擅长自然语言处理  NLP机器学习，人人平等
    -生成式的文字，图片，视频等任务交给AIGC
    - openai\通义千问等sdk 提供接口
- 基于冯诺依曼，非AIGC任务，交给传统编程流程来做

AIGC 全栈 = 编程+AIGC(Prompt Enginnering)

驱动LLM工作的核心，就是给它一段合适的Pompt
LLM = coding copilot
