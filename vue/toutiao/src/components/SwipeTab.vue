<template>
    <div class=" h-1/2 p-0 ">
        <van-tabs swipeable>
            <van-tab v-for="(item, index) in list" :title="item" :key="index">
                <div class="swipeContent">
                    <div v-show="index === 0">
                        <NewsList />
                    </div>
                    <div v-show="index !== 0" class="mx-auto text-center h-screen text-[0.6rem] leading-[0.6rem] mt-[0.6rem]">
                        组件开发中..................
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
    "推荐",
    "关注",
    "热榜",
    "独家",
    "原创",
    "小视频"
]);
</script>

<style scoped>

</style>