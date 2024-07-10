<template>
    <div class="container mx-auto p-4">
            <div class="bg-white rounded-lg shadow-md p-8 mt-8">
                <h1 class="text-3xl font-bold mb-4">{{ post.title }} </h1>
                <div class="text-gray-700 mb-4">
                    <p v-html="post.category"></p>
                </div>
            </div>
    </div>
</template>

<script setup>
    import { useRoute,useRouter } from 'vue-router'
    import { ref,onMounted } from 'vue';
    import {getPostsById,getRecommendPosts } from '../api/index.js'

    // 当前路由对象  hooks 编程  use开头的
    const route = useRoute();
     const id = route.params.id;
    // const router = useRouter();

    const post = ref ({})

    onMounted(async ()=>{
           const data = await getPostsById(id)
           if (data) {
            post.value = data
           }
           const recommends = await getRecommendPosts(id)
    })

</script>

<style lang="scss" scoped>

</style>