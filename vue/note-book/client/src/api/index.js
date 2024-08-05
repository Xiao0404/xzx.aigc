import axios from "axios";
import { showToast } from 'vant';
import router from "../router/index.js";

axios.defaults.baseURL = "http://121.41.95.44:3000";
// 告诉前端后端返回的数据，请求头
axios.defaults.headers.post["Content-Type"] = "application/json";


// 请求拦截
axios.interceptors.request.use(req => {
    let jwtToken = localStorage.getItem('token')
    if(jwtToken){
        req.headers.Authorization = jwtToken
    }
    // 放行
    return req
}
)


// 响应拦截
axios.interceptors.response.use(res => {
    if(res.status !== 200){ //程序性错误
        showToast('服务器异常')
        return Promise.reject(res)
    }else {
        if(res.data.code !== '800'){
            // 逻辑错误
            showToast(res.data.msg)
            
            return Promise.reject(res)
        }else {
            return res.data
        }
    }
}
);

export default axios;