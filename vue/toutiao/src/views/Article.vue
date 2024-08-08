<template>
    <el-container>
      <el-header>
        <el-button @click="back">Back</el-button>
        <h1>{{ article?.title }}</h1>
      </el-header>
      <el-main>
        <el-card class="article-card">
          <div class="article-header">
            <div class="avatar" :style="{ backgroundImage: `url(${article?.avatar})` }"></div>
            <div>
              <h4>{{ article?.source }}</h4>
              <el-tag>{{ article?.time }} </el-tag>
            </div>
            <el-button @click="toggleAttention">{{ article?.attention ? 'Unfollow' : 'Follow' }}</el-button>
          </div>
          <p>{{ article?.description }}</p>
          <div v-if="article?.img">
            <img :src="article.img" alt="article image"  />
          </div>
          <p class="intro">{{ article?.intro }}</p>
          <div class="tags">
            <el-tag v-for="tag in article?.tags" :key="tag">{{ tag }}</el-tag>
          </div>
          <div class="like-container">
            <el-button :type="article?.islike ? 'danger' : 'info'" @click="toggleLike">
              <el-icon :name="article?.islike ? 'thumb-up' : 'thumb-down'"></el-icon>
              <span>{{ article?.like_num }}</span>
            </el-button>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useNewsStore } from '../stores/news';
  
  const route = useRoute();
  const router = useRouter();
  const newsStore = useNewsStore();
  const articleId = parseInt(route.params.id as string, 10);
  const article = computed(() => newsStore.getNewsById(articleId));
  
  const back = () => {
    router.back();
  };
  
  const toggleAttention = () => {
    if (article.value) {
      article.value.attention = !article.value.attention;
    }
  };
  
  const toggleLike = () => {
    if (article.value) {
      article.value.islike = !article.value.islike;
      article.value.like_num += article.value.islike ? 1 : -1;
    }
  };
  </script>
  
  <style lang="less" scoped>
  .article-card {
    .article-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
  
      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
      }
    }
  
    .intro {
      margin: 1rem 0;
    }
  
    .tags {
      margin-bottom: 1rem;
  
      .el-tag {
        margin-right: 0.5rem;
      }
    }
  
    .like-container {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
  
      .el-button {
        display: flex;
        align-items: center;
        justify-content: center;
        
        .el-icon {
          margin-right: 0.5rem;
        }
      }
    }
  }
  </style>
  