<template>
    <Child @addMsg="handle" />
  
    <div class="body">
      <ul>
        <li v-for="item in list">{{item}}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
    import Child from './child.vue';
  const newMsg = ref('')
  const list = ref(['html', 'css'])
  const handle = (e) => {
    list.value.push(e)
  }
  
  </script> 
  
  <style lang="css" scoped>
  
  </style>