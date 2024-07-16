<template>
    <!-- 动态组件 -->
    <component :is="component" />
</template>

<script setup>
    import {computed} from 'vue' 
    // ref 是私有的     props 是父组件向子组件传递数据       computed 根据其他数据派生新数据，有个计算过程，且这个属性会根据其他数据变化而变化
    import Home from '../../pages/Home.vue'
    import About from '../../pages/About.vue'
    import { useRouter } from './index.js';
    const component = computed(() =>{
       const route = router.routes.find(
        (route) => route.path == router.current.value
       )
       console.log(route,'////');
       return route? route.component: null
       // 错误的route则不渲染

    })

    // router-view 动态组件 展示 依赖于 url 的变化
    // 响应式 router.current  设置为ref

const router = useRouter();
console.log(router);



</script>

<style lang="scss" scoped>

</style>