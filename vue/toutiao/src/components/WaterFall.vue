<template>
     <div class="waterfall-container">
    <ProductCard
      v-for="card in cards"
      :key="card.id"
      :card="card"
    />
    <van-divider dashed v-if="!hasMore" style="text-align: center; color: #1989fa; border-color: #1989fa; padding: 0 16px;">
      没有更多了
    </van-divider>
  </div>
</template>

<script setup lang="ts">
import ProductCard from '../components/product/ProductCard.vue';
import { ref, watch, onMounted,toRefs } from 'vue';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { WaterFallCards } from '../types/waterFallCards';
import { useWaterfallStore } from '../stores/waterFall';

const waterfallStore = useWaterfallStore();
const cards = ref(waterfallStore.cards);
const hasMore = ref(true);
const itemRef = ref<HTMLElement | null>(null);

const { setHasMore } = useIntersectionObserver(itemRef, () => {
  handleNextPage(setHasMore);
});

const handleNextPage = async (setHasMore: (value: boolean) => void) => {
  // 模拟异步请求
  const newCards: WaterFallCards[] = await new Promise((resolve) => {
    setTimeout(() => {
      const fetchedCards = Array.from({ length: 10 }, (_, i) => ({
        id: i + cards.value.length + 1,
        title: `Card ${i + cards.value.length + 1}`,
        description: `Description ${i + cards.value.length + 1}`,
        img: `https://via.placeholder.com/300x${400 + i * 50}`,
        width: 300,
        height: 400 + i * 50,
      }));
      resolve(fetchedCards);
    }, 1000);
  });

  if (newCards.length > 0) {
    waterfallStore.setCards([...cards.value, ...newCards]);
    cards.value = waterfallStore.cards;
  } else {
    setHasMore(false);
  }
};
</script>

<style lang="less" scoped>
.waterfall-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 16px;
  box-sizing: border-box;

  .van-divider {
    margin-top: 16px;
  }
}
</style>