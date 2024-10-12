import fs from 'fs/promises';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const client = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
    baseURL: process.env.BASE_URL,
});

// 从 JSON 文件读取新闻数据
const readNewsData = async () => {
    const data = await fs.readFile('../../../public/data/posts.json', 'utf-8');
    return JSON.parse(data);
};

const outputFilePath = '../../../public/data/news_with_embeddings.json';

const newsWithEmbeddings = [];

const createEmbeddings = async () => {
    const newsList = await readNewsData(); // 从 JSON 文件读取新闻列表

    for (const news of newsList) {
        const response = await client.embeddings.create({
            model: 'text-embedding-ada-002',
            input: news.title, // 使用标题生成嵌入
        });

        newsWithEmbeddings.push({
            id: news.id, // 包含 id
            title: news.title,
            embedding: response.data[0].embedding,
        });
    }

    await fs.writeFile(outputFilePath, JSON.stringify(newsWithEmbeddings));
    console.log('Embeddings created and saved to', outputFilePath);
};

// 调用创建嵌入的函数
createEmbeddings();
