import { defineStore } from 'pinia';
import { NewsItem } from '../types/news';

export const useNewsStore = defineStore('news', {
  state: () => ({
    newsList: [] as NewsItem[]
  }),
  actions: {
    setNewsList(news: NewsItem[]) {
      this.newsList = news;
    },
    getNewsById(id: number): NewsItem | undefined {
      return this.newsList.find(news => news.id === id);
    }
  }
});

// 初始化新闻数据
const initialNews: NewsItem[] = [
  { id: 1, title: 'News 1', description: 'Description 1', img: 'https://via.placeholder.com/150', avatar: 'https://via.placeholder.com/50', source: 'Source 1', time: '2', intro: 'Intro 1', tags: ['tag1', 'tag2'], attention: false, islike: false, like_num: 10 },
  { id: 2, title: 'News 2', description: 'Description 2', img: "", avatar: 'https://via.placeholder.com/50', source: 'Source 2', time: '3', intro: 'Intro 2', tags: ['tag3', 'tag4'], attention: true, islike: true, like_num: 20 },
  { id: 3, title: 'News 3', description: 'Description 3', img: 'https://via.placeholder.com/150', avatar: 'https://via.placeholder.com/50', source: 'Source 3', time: '4', intro: 'Intro 3', tags: ['tag5', 'tag6'], attention: false, islike: false, like_num: 30 }
];

const newsStore = useNewsStore();
newsStore.setNewsList(initialNews);