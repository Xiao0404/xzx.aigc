
// node 里面的模块化里的关键字，引入模块
// 从本地node_modules引入 openai模块，OpenAI 
const OpenAI = require('openai');

// 安全意识
require('dotenv').config();
// 环境变量  
//  console.log(process.env.OPENAI_API_KEY,'-------');
// console.log(`Loaded API Key: ${process.env.OPENAI_API_KEY}`); // 添加调试信息


const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // 确保这是有效的API密钥
    baseURL: 'https://api.chatanywhere.tech/v1' // 检查并确保这是正确的API服务地址
});


const getChatResponse = async function(model,prompt,n){
    const response = await client.chat.completions.create({
        model: model, // 适合聊天的模型 很多种
        //定义
        n:n,   //生成n条
        messages: [
         { 
                role: 'user', 
            content: prompt 
        }
        ]
    });
    return response.choices[0].message.content;
}


const main =  async () =>{
    //AIGC 优势就是处理文本，生成内容

        const text =`泡一杯茶很容易。首先需要把水烧开。
        在等待期间，拿一个杯子并把茶包放进去。
        一旦水开了就把它倒到茶包上。
        等待一会儿，让茶叶浸泡，几分钟后，取出茶包。
        如果你愿意，可以加一些糖和牛奶调味。
        就这样，你可以享受一杯美味的茶了。`;

        const prompt = `
        你将获取由三个引号括起来的文本。
        如果它包含一系列的指令，则需要按照一下格式重新编写这些指令
        第一步 - ...
        第二步 - ...
        ...
        第N步 - ...
        如果文本中不包含一系列的指令，则直接写"未提供步骤"
        """${text}"""
        `
    const result = await getChatResponse('gpt-3.5-turbo',prompt,1);
    console.log(result);

}
main();