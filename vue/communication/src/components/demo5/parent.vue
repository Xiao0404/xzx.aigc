<template>
    
    <Child ref="childRef" />
  
    <div class="body">
      <ul>
        <li v-for="item in childRef?.list">{{item}}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
    import { onMounted } from 'vue';
import Child from './child.vue'
    import { ref } from 'vue'

    const childRef = ref(null)

    onMounted(() => {
        console.log(childRef.value.list)
    })

  </script>
  
  <style lang="css" scoped>
  
  </style>