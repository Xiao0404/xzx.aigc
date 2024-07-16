<template>
    <component :is="component" />
</template>

<script setup>
    import {computed} from 'vue'
    import Home from '../../pages/Home.vue'
    import About from '../../pages/About.vue'
    import { useRouter } from './index.js';
    const component = computed(() =>{
       const route = router.routes.find(
        (route) => route.path == router.current.value
       )
       console.log(route,'////');
       return route? route.component: null

    })


const router = useRouter();
console.log(router);



</script>

<style lang="scss" scoped>

</style>