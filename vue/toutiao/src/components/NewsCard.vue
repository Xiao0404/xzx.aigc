<template>
    <el-card :body-style="{ padding: '10px' }" class="news-card" v-for="(item,index) in newsCards" key="">
      <el-row type="flex" align="middle">
        <el-col :span="18">
          <div class="news-card__content">
            <h2 class="news-card__title">{{ title }}</h2>
            <p class="news-card__description">{{ description }}</p>
          </div>
        </el-col>
          <el-col :span="6">
            <img v-if="img" :src="image" :alt="title" class="news-card__image" />
          </el-col>
      </el-row>
    </el-card>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // 假设的数据
  const newsCards= [
        {
          title: '新闻标题1',
          image: 'https://via.placeholder.com/350x200',
          description: '新闻描述1。这是一段简短的新闻描述文本，用于展示新闻的主要内容。',
        },
        {
          title: '新闻标题2',
          image: 'https://via.placeholder.com/350x200',
          description: '新闻描述2。这是一段简短的新闻描述文本，用于展示新闻的主要内容。',
        },
        // 更多新闻卡片数据...
      ]

  
  </script>
  
  <style scoped>
  .news-card {
    margin-bottom: -1rem; /* 将负值应用于 margin-bottom，以消除卡片间的空白 */
  border-top: none; /* 移除顶部边框 */
  border-left: none; /* 移除左边框 */
  border-right: none; /* 移除右边框 */
  border-bottom: 1px solid rgba(0, 0, 0, 0.1); /* 设置底部边框颜色为较浅的灰色 */
  }
  
  .news-card__image {
    width: 100%;
    height: 100px;
    object-fit: cover;
  }
  
  .news-card__content {
    padding: 1rem;
  }
  
  .news-card__title {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  .news-card__description {
    color: #666;
    line-height: 1.5;
  }

  .news-card:last-child {
  margin-bottom: 0; /* 取消最后一个卡片的负值 margin-bottom，避免最后一个卡片被挤出容器 */
}
  </style>