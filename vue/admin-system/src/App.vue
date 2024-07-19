<script setup>
import {useSidebarStore} from './store/sidebar'
// use开头 hooks 
const sidebarStore = useSidebarStore();
// sidebarStore.handleCollapse();
// console.log(sidebarStore);
</script>

<template>
  <div>
    <router-view />
  </div>

</template>

<style scoped>

</style>
