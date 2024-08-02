<template>
    <router-view/>
    <!-- {{ count }}
    
    {{ name }} -->
</template>

<script setup lang="ts">
    import { reactive, Reactive , toRefs } from 'vue';
    // const state = reactive({count:0,age:17,name:'11'})
    // // 挺多响应式对象的，
    // const { count,name } = toRefs(state);

    // setTimeout(() => {
    //     state.count = 2
    // },3000)

    // console.log(count,name);
    

</script>

<style lang="scss" scoped>

</style>