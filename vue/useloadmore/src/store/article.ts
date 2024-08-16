import {defineStore} from "pinia";
import type { Article } from '../types/article';
import {ref} from 'vue'


export const useArticleStore = defineStore('article',() => {
       
       const _articles: Article[]  = [
        {
        id:1,
        title: '胡总牛逼'
       },
       {
        id:2,
        title: '胡总牛逼'
       },
       {
        id:3,
        title: '胡总牛逼'
       },
       {
        id:4,
        title: '胡总牛逼'
       },
       {
        id:5,
        title: '胡总牛逼'
       },
       {
        id:6,
        title: '胡总牛逼'
       },
       {
        id:7,
        title: '胡总牛逼'
       },
       {
        id:8,
        title: '胡总牛逼'
       },
       {
        id:9,
        title: '胡总牛逼'
       },
       {
        id:10,
        title: '胡总牛逼'
       },
       {
        id:11,
        title: '胡总牛逼'
       },
       {
        id:12,
        title: '胡总牛逼'
       },
       {
        id:13,
        title: '胡总牛逼'
       },
       {
        id:14,
        title: '胡总牛逼'
       },
       {
        id:15,
        title: '胡总牛逼'
       },
       {
        id:16,
        title: '胡总牛逼'
       },
       {
        id:17,
        title: '胡总牛逼'
       },
       {
        id:18,
        title: '胡总牛逼'
       },
       {
        id:19,
        title: '胡总牛逼'
       },
       {
        id:20,
        title: '胡总牛逼'
       },
       {
        id:21,
        title: '胡总牛逼'
       },
       {
        id:22,
        title: '胡总牛逼'
       },
       {
        id:23,
        title: '胡总牛逼'
       },
       {
        id:24,
        title: '胡总牛逼'
       },
       {
        id:25,
        title: '胡总牛逼'
       },
       {
        id:26,
        title: '胡总牛逼'
       },
       {
        id:27,
        title: '胡总牛逼'
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