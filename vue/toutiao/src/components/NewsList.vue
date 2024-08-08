<template>
   <div class="news-list">
    <NewsCard v-for="news in newsList" :key="news.id" :news="news"  />
  </div>
</template>

<script setup>
import {ref,computed} from 'vue'
import NewsCard from './NewsCard.vue';
import { useNewsStore } from '@/stores/news';

const newsStore = useNewsStore();

const newsList = computed(() => newsStore.newsList);


</script>

<style lang="less" scoped>
.news-list {
  display: flex;
  flex-direction: column;
}
</style>