import fs from 'fs/promises';
import OpenAI from 'openai';

const inputFilePath = '../../../public/data/news_with_embeddings.json';

// const data = await fs.readFile(inputFilePath, 'utf-8');
// const newsList = JSON.parse(data);

// 计算向量的余弦相似度
const cosineSimilarity = (v1, v2) => {
    const dotProduct = v1.reduce((acc, curr, i) => acc + curr * v2[i], 0);
    const lengthV1 = Math.sqrt(v1.reduce((acc, curr) => acc + curr * curr, 0));
    const lengthV2 = Math.sqrt(v2.reduce((acc, curr) => acc + curr * curr, 0));
    return dotProduct / (lengthV1 * lengthV2);
};

const performSearch = async (input) => {
    const data = await fetch('/data/news_with_embeddings.json');
    const newsList = await data.json();

    const client = new OpenAI({
        apiKey: 'sk-Fp9nir1Y3cfHSOkC0HY4Yn73pPMRM0YoWiVqTusqKIBwSVj6', // 直接使用 API 密钥
        baseURL: 'https://api.302.ai/v1',
        dangerouslyAllowBrowser: true, // 允许在浏览器中使用
    });

    const response = await client.embeddings.create({
        model: 'text-embedding-ada-002',
        input: input,
    });

    const { embedding } = response.data[0];
    const results = newsList.map(item => ({
        ...item,
        similarity: cosineSimilarity(embedding, item.embedding),
    }))
    .sort((a, b) => b.similarity - a.similarity) // 降序排序
    .slice(0, 3); // 取前3个结果

    return results;
};

// 导出 performSearch 函数
export { performSearch };

// 示例调用（可以在开发时使用，实际使用时可以注释掉）
// const input = '你的搜索内容'; // 替换为实际输入
// const results = await performSearch(input);
// console.log(results);
