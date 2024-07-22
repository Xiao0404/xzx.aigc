<template>
    <Child v-model:list="list"  />
  
    <div class="body">
      <ul>
        <li v-for="item in list">{{item}}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Child from './child.vue'

  
 
  const list = ref(['html', 'css'])
  
 
  </script>
  
  <style lang="css" scoped>
  
  </style>