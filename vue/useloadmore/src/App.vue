<template>
  <section>
    <article class="item" v-for="(item,index) in articles" :key="item.id"
      :ref="(el) => (index === articles.length-1 ? (itemRef = el) : '' )"
    >
        <div>{{ index }}  {{ item.title }}</div>
    </article>
    <div v-if="!hasMore">
      没有数据了
    </div>
  </section>
</template>

<script setup lang="ts">
import { toRefs,onMounted,ref } from 'vue';
import { useArticleStore } from './store/article';
// 封装 loadmore 响应式业务的hook 函数 
import {useLoadMore} from './hooks/useLoadMore';

const store = useArticleStore();
const { articles,getArticles } = toRefs(store);
const currentPage = ref(1);
let hasMore = ref<boolean>(true)
const itemRef = ref(null);
const handleNextPage = async(setHasMore) => {
    currentPage.value++;
   const res = await store.getArticles(currentPage.value);
   if(!res.hasMore) {
    setHasMore(false);
    hasMore.value = false;
   }
}

const { setHasMore } = useLoadMore(itemRef,() =>{
   handleNextPage(setHasMore)
})

onMounted(async() => {
      await store.getArticles(currentPage.value);
})

</script>

<style  scoped>
  .item{
    height: 20vh;
  }
</style>