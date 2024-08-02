<template>
    <div>
        
        <router-view v-slot="{Component}">
            <keep-alive :include="cachedComponents">
                <component :is="Component" />
            </keep-alive>
        </router-view>
        <div class="footer h-12">
            <TabBar class="fixed bottom-0" />
        </div>
    </div>
</template>

<script setup lang="ts">
// ts 语法
import TabBar from '../views/layout/TabBar.vue'
import { log } from 'console';
import {computed} from 'vue'

import {useRouter} from 'vue-router'
const router = useRouter()
const cachedComponents = computed(() => {
    return router.getRoutes()
    .filter(route => route.meta.cache)
    .map(route => route.name)
})

console.log(cachedComponents);



</script>

<style lang="scss" scoped>

</style>