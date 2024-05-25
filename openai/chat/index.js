// console.log('后端服务启动了')
// openai

// 使用 require 关键字导入 openai  首字母大写 类 JS是大小写敏感
const OpenAI = require('openai');

// 实例化 OpenAI  {}对象自变量
const client = new OpenAI({
    apiKey: 'sk-4EALZWXkk4Qdv18mRi2R7uY5f4i3vA05IYGhiTVVURIG7nZo', // 确保这是有效的API密钥
    baseURL: 'https://api.chatanywhere.tech/v1' // 检查并确保这是正确的API服务地址
});

// 入口主函数  
// main函数内部会有异步任务 async + await 
async function main() {
    try {
        // 和 AI LLM CHAT  从编程思维 -> AI 编程思维 -> AGI
        // client 是 openai 对象 chat 聊天 完成 
        // LLM 是在远程运行 await


        // 字符串模板 提示词
    const prompt = `
    <tr class="item">
            <td width="100" valign="top">
                

                    <a class="nbg" href="https://movie.douban.com/subject/35503073/" title="对你的想象">
                        <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2905327559.webp" width="75" alt="对你的想象" class="">
                    </a>
            </td>

            <td valign="top">
                

                <div class="pl2">

                    <a href="https://movie.douban.com/subject/35503073/" class="">
                        对你的想象
                        / <span style="font-size:13px;">关于你的想法 / 概念中的你</span>
                    </a>



                    <p class="pl">2024-03-16(西南偏南电影节) / 2024-05-02(美国网络) / 安妮·海瑟薇 / 尼古拉斯·加利齐纳 / 艾拉·鲁宾 / 安妮·玛莫罗 / 瑞德·斯科特 / 帕芮·马费尔德 / 乔丹·亚伦·霍尔 / 玛蒂尔达·吉安诺普洛斯 / Meg Millidge / 奇克·曼诺哈 / Ray Cham / Jaiden...</p>

                    


                        
                        <div class="star clearfix">
                                <span class="allstar30"></span>
                                <span class="rating_nums">5.9</span>
                                <span class="pl">(21745人评价)</span>

                        </div>


                </div>

            </td>
        </tr>
        这是一段电影html，请获取电影名(name),封面链接(picture),简介(info),评分(score),评论人数(commentsNumber).请使用括号的单词作为属性名，以JSON的格式返回。
    ` 



        const chatCompletion = await client.chat.completions.create({
            model: 'gpt-3.5-turbo', // 适合聊天的模型 很多种
            //定义
            messages: [
                { role: 'user', content: prompt }
            ]
        });
        console.log(chatCompletion.choices);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
