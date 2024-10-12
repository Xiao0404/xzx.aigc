<template>
  <div class="search-results">
    <h1>搜索结果</h1>
    <div v-if="loading">加载中...</div> <!-- 显示加载状态 -->
    <div v-else>
      <NewsCard v-for="news in results" :key="news.id" :news="news" />
      <div v-if="results.length === 0">没有找到相关结果。</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import NewsCard from './NewsCard.vue';
import { useRoute } from 'vue-router';
import { performSearch } from './search/search.js'; // 导入 performSearch 函数

const route = useRoute();
const results = ref([]);
const loading = ref(true); // 添加加载状态

onMounted(async () => {
    const query = route.query.q; // 获取查询参数
    if (query) {
        results.value = await performSearch(query); // 调用 performSearch 函数
    }
    loading.value = false; // API 响应后更新加载状态
});
</script>

<style scoped>
.search-results {
  padding: 20px;
}
</style>
