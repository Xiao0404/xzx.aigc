import {defineStore} from "pinia";
import type { Article } from '../types/article';
import {ref} from 'vue'


export const useArticleStore = defineStore('article',() => {
       
       const _articles: Article[]  = [
        {
        id:1,
        title: '我要成为前端高手'
       },
       {
        id:2,
        title: '我要成为前端高手'
       },
       {
        id:3,
        title: '我要成为前端高手'
       },
       {
        id:4,
        title: '我要成为前端高手'
       },
       {
        id:5,
        title: '我要成为前端高手'
       },
       {
        id:6,
        title: '我要成为前端高手'
       },
       {
        id:7,
        title: '我要成为前端高手'
       },
       {
        id:8,
        title: '我要成为前端高手'
       },
       {
        id:9,
        title: '我要成为前端高手'
       },
       {
        id:10,
        title: '我要成为前端高手'
       },
       {
        id:11,
        title: '我要成为前端高手'
       },
       {
        id:12,
        title: '我要成为前端高手'
       },
       {
        id:13,
        title: '我要成为前端高手'
       },
       {
        id:14,
        title: '我要成为前端高手'
       },
       {
        id:15,
        title: '我要成为前端高手'
       },
       {
        id:16,
        title: '我要成为前端高手'
       },
       {
        id:17,
        title: '我要成为前端高手'
       },
       {
        id:18,
        title: '我要成为前端高手'
       },
       {
        id:19,
        title: '我要成为前端高手'
       },
       {
        id:20,
        title: '我要成为前端高手'
       },
       {
        id:21,
        title: '我要成为前端高手'
       },
       {
        id:22,
        title: '我要成为前端高手'
       },
       {
        id:23,
        title: '我要成为前端高手'
       },
       {
        id:24,
        title: '我要成为前端高手'
       },
       {
        id:25,
        title: '我要成为前端高手'
       },
       {
        id:26,
        title: '我要成为前端高手'
       },
       {
        id:27,
        title: '我要成为前端高手'
       }

    ]

    const articles = ref<Article[]>([])
    // 滚动加载更多
    const getArticles = (page:number,size:number=10) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                // 某页的数据
                const data = _articles.slice((page-1)* size,(page-1)*size+size)
                articles.value = [...articles.value,...data]
                resolve({
                    data,
                    page,
                    total:_articles.length,
                    hasMore:page * size < _articles.length

                })

            },500)
        })
    }


    return {
        articles,
        getArticles

    }
})