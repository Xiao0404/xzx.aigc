<template>
    <div class="wrapper">
        <v-header />
        <v-sidebar />
        <main class="content-box" :class="{'content-collapse':sidebarStore.Collapse}">
            <router-view />
        </main>
        
    </div>
</template>

<script setup>
        import vHeader from '../components/header.vue';
        import vSidebar from '../components/sidebar.vue';
        // 转译成了 v-header
        import { useSidebarStore } from '../store/sidebar';

        const sidebarStore = useSidebarStore();


</script>

<style  >
    /* 没 scoped 就是全局样式 */
    .wrapper{
        height: 100vh;
        overflow: hidden;
    }
    .content-box {
    position: absolute;
    left: 250px;
    right: 0;
    top: 70px;
    bottom: 0;
    padding-bottom: 30px;
    -webkit-transition: left 0.3s ease-in-out;
    transition: left 0.3s ease-in-out;
    background: #eef0fc;
    overflow: hidden;
}

.content {
    width: auto;
    height: 100%;
    padding: 20px;
    overflow-y: scroll;
    box-sizing: border-box;
}

.content::-webkit-scrollbar {
    width: 0;
}

.content-collapse {
    left: 55px;
}

</style>