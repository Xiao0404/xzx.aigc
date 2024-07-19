<template>
    <div class="wrapper">
        <v-header />
        <v-sidebar />
        <main class="content-box">
            <router-view />
        </main>
        <router-view />
    </div>
</template>

<script setup>
        import vHeader from '../components/header.vue';
        import vSidebar from '../components/sidebar.vue';
        // 转译成了 v-header

</script>

<style  >
    /* 没 scoped 就是全局样式 */
    .wrapper{
        height: 100vh;
        overflow: hidden;
    }

</style>