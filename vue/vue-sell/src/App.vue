<template>
  <div>
     <Header :seller="sellerData" />
     <div class="tab">
        <div class="tab-wrap">
            <router-link to="/goods">商品</router-link>
        </div>
        <div class="tab-wrap">
            <router-link to="/comments">评论</router-link>
        </div>
        <div class="tab-wrap">
            <router-link to="/seller">商家</router-link>
        </div>
     </div>

     <RouterView></RouterView>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from './components/header/Index.vue';
import { getSeller } from '@/api';

const sellerData = ref({});

onMounted(async () => {
  try {
    const data = await getSeller();
    sellerData.value = data;
  } catch (error) {
    console.error('Failed to fetch seller data:', error);
  }
});
</script>

<style lang="less" scoped>
   @import '@/assets/variable.less';
      .tab{
        display: flex;
        height: 36px;

       &-wrap{
           flex: 1;
            a{
              width: 100%;
              height: 100%;
              display: block;
              text-align: center;
              line-height: 36px;
              color: @color-font;
              text-decoration: none;
              
              &.router-link-active {
                color: @color-red;
                border-bottom: 2px solid @color-red;
              }
            }
    }
  }
</style>