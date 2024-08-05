<template>
    <div class="pt-4 h-1/2  ">
        <van-tabs swipeable>
            <van-tab v-for="(item, index) in list" :title="item">
                <div class="">
                    <NewsCard v-for="(card, index) in newsCards" :key="index" :title="card.title" :image="card.image"
                        :description="card.description" />
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import NewsCard from './NewsCard.vue'

const list = ref([
    "推荐",
    "关注",
    "热榜",
    "独家",
    "原创",
    "小视频"

]);


const newsCards= [
        {
          title: '新闻标题1',
          image: 'https://via.placeholder.com/350x200',
          description: '新闻描述1。这是一段简短的新闻描述文本，用于展示新闻的主要内容11111111111111111111111111111111111111111111111111111111111111111111111111111111111。',
        },
        {
          title: '新闻标题2',
          image: 'https://via.placeholder.com/350x200',
          description: '新闻描述2。这是一段简短的新闻描述文本，用于展示新闻的主要内容。',
        },
        // 更多新闻卡片数据...
      ]

</script>

<style scoped></style>