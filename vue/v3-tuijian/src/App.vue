<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <nav class="bg-gray-800 text-white p-4">
      <router-link to="/" class="hover:text-gray-300  mr-4">首页</router-link>
      <router-link to="/cart" class="hover:text-gray-300 mr-4">购物车</router-link>
      <router-link to="/login" class="hover:text-gray-300">登录</router-link>
    </nav>

  <div> 
    <router-view />
  </div>
 
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
