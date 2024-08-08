<template>

<div>
    <WaterFall />
    <van-loading size="12px" v-if="loading" style="text-align: center;">加载中...</van-loading>
  </div>


</template>

<script setup lang="ts">

import WaterFall from '../WaterFall.vue';
import { ref, onMounted } from 'vue';
import { useWaterfallStore } from '@/stores/waterFall';
import { WaterFallCards } from '@/types/waterFallCards';


const waterfallStore = useWaterfallStore();
const loading = ref(false);
const currentPage = ref(1);
const pageSize = 10;

// 页面挂载时获取初始数据
onMounted(async () => {
  loading.value = true;
  await fetchCards();
  loading.value = false;
});

const fetchCards = async () => {
  // 模拟异步请求
  const newCards = await new Promise((resolve) => {
    setTimeout(() => {
      const fetchedCards = Array.from({ length: pageSize }, (_, i) => ({
        id: i + 1,
        title: `Card ${i + 1}`,
        description: `Description ${i + 1}`,
        img: `https://via.placeholder.com/300x${400 + i * 50}`,
        width: 300,
        height: 400 + i * 50,
      }));
      resolve(fetchedCards);
    }, 1000);
  });

  waterfallStore.setCards(newCards as WaterFallCards[]);
};

</script>

<style lang="less" scoped>

</style>