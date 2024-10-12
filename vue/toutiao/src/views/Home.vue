<template>
    <div class="home-container">
        <Search />
        <SwipeTab />
        <van-back-top />
    </div>
</template>

<script setup>
    import SwipeTab from '@/components/SwipeTab.vue';
</script>

<style lang="less" scoped>
    .home-container {
        background-color: #f0f0f0; /* 设置背景色 */
        padding: 0; /* 去掉内边距 */
        margin: 0;
        min-height: 100vh; /* 确保至少占满整个视口高度 */
    }
    
</style>