// node 里面的模块化里的关键字，引入模块
// 从本地node_modules引入 openai模块，OpenAI 
const OpenAI = require('openai');

// 安全意识
require('dotenv').config();
// 环境变量  
// console.log(process.env.OPENAI_KEY_API,'-------');



const client = new OpenAI({
    apiKey: 'sk-6hn5DRu3IgUAymGVSFVAOa8l3HnKmkh9ShLgWvFHWTlVrU3s', // 确保这是有效的API密钥
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


async function main(){
    // es6 的模板字符串 比传统的" ",''动态解析
    //  多行 特别适合详细设置 prompt  
        let text = `
         您应该提供尽可能清晰，具体的指示，以表达您希望模型执行的任务\
         这将引导模型朝向所需的输出，并降低收到无关或不正确响应的可能性，\
         不要将写清晰的提示词与简短的提示词混淆\
         在许多情况下更长的提示词可以为模型提供更多的清晰度和上下文信息，
         从而导致更详细和相关的输出，

        `

        // LLM 的 nlp 总结能力
        // 转译 
        let prompt = `
            把用三个反引号括起来的文本总结成一句话，20词以内,输出英语。
            \'\'\'${text}\'\'\'
        `


        // const chatCompletion = await  getChatResponse('gpt-3.5-turbo',prompt,1);
        // console.log(chatCompletion);
    
            let prompt2 =`
            你的任务是以一致的风格回答问题。

        <孩子>: 教我耐心。

        <祖父母>: 挖出最深峡谷的河流源于一处不起眼的泉眼；最宏伟的交响乐从单一的音符开始；最复杂的挂毯以一根孤独的线开始编织。

        <孩子>: 教我韧性。
            
            `
        const response = await getChatResponse('gpt-3.5-turbo',prompt2,1);
        console.log(response);

}

    main();