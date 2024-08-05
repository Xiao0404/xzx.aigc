import axios from 'axios';

const url = 'https://api.coze.cn/open_api/v2/chat';
const apiKey = 'pat_UGsg3aiUOB4nExAza1RUpF1e73WFYXiA8wrvRZ0KnMZZdXXVP7Ya9dswLaVsLypS';
const botId = '7399123258584727563';

import { FetchDataRequest } from '../types/cozeConfig'

async function getCozeData(content: string): Promise<any> {
    const headers = {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
    };

    const data: FetchDataRequest = {
        "bot_id": botId,
        "conversation_id": "456",
        "user": "user_1",
        "query": content,
        "stream": false,
        "chat_history": [
            { "role": "user" },
            { "role": "assistant", "type": "answer" }
        ]
    };

    try {
        const response: any = await axios.post(url, data, { headers });

        console.log(response);

        return response;

    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
export default getCozeData