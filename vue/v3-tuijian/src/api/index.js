// 所有的接口请求都应放在这里
// 通fetch 写很乱,    axios

import {service } from './request'

// 文章列表
export const getPosts = () =>{
        return service.get('/posts')
}

//文章详情
export const getPostsById = (id) =>{
    return service.get(`/posts/${id}`)
}

//相关文章
export const getRecommendPosts = (id) =>{
    // return axios.get(`http://localhost:3001/posts/${id}`)
    
}
