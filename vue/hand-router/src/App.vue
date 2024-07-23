<script setup>

</script>

<template>
  <header>
    <nav>
      <router-link to="/">首页</router-link>    
      <router-link to="/about">About</router-link>
      <!-- 其中首页和About就是插槽对应的 -->
    </nav>
  </header>
  <main>
    <router-view />
  </main>
  <footer>
  </footer>
</template>

<style scoped>

</style>