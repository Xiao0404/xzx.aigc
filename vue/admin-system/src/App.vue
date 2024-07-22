<script setup>
import {useSidebarStore} from './store/sidebar'
// import TestSlot from './TestSlot.vue'
// use开头 hooks  状态便来到此处
const sidebarStore = useSidebarStore();
// sidebarStore.handleCollapse();
// console.log(sidebarStore);
</script>

<template>
  <div>
    <router-view />
      <!-- <TestSlot >
        <div>默认插槽</div>
        <template #header>
          <header>header slot</header>
        </template>
        <template #footer>
          <header>footer slot</header>
        </template>
      </TestSlot> -->
  </div>

</template>

<style scoped>

</style>
