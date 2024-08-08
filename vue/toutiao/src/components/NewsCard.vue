<template>
  <el-card class="news-card" @click="navigateToArticle">
    <div class="content-container">
      <h1>{{ news.title }}</h1>
      <p>{{ news.description }}</p>
    </div>
    <div v-if="news.img" class="image-container">
      <img :src="news.img" alt="news image" />
    </div>
  </el-card>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  news: {
    type: Object,
    required: true
  }
});

const router = useRouter();

const navigateToArticle = () => {
  router.push({ name: 'Article', params: { id: props.news.id.toString() } });
};
</script>

<style scoped>
.news-card {
  
  @apply flex p-4 mb-4 border rounded-lg shadow-md;

}

  .image-container img {
    @apply w-full h-auto;
  }

  .content-container {
    @apply flex flex-col ml-4;
  }

</style>
