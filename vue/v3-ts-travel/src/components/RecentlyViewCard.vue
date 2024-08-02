<template>
    <div class="item-wrapper flex space-x-2 w-screen overflow-scroll px-4">
        <div 
            class="item flex-[0_0_auto] w-28 space-y-2"
            v-for="(item, index) in items"
            :key="item.title"
        >
            <div class="item-image">
                <img :src="item.cover" :alt="item.title"
                    class="rounded-lg"
                >
            </div>
            <div class="item-info">
                <div class="item-name  text-xs font-bold">{{ item.title }}</div>
                <div class="item-price  text-xs font-bold">{{ getCurrency(item.price) }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { RecentlyViewedItem } from '../types/home'
// 工具函数库
import { getCurrency } from '../utils/utils'
// ts 里比js 复杂
// 核心数据 
    interface Props{
        items: RecentlyViewedItem[]
    }

    // defineProps<{
    //     items: RecentlyViewedItem[]
    // }>()

        defineProps<Props>()


</script>

<style  scoped>

</style>