<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Rate from './components/Rate1.vue';
import {ref} from 'vue';
let score = ref(3)

function update(num) {
          score.value = num 
}

</script>

<template>
      <div>
         <!-- 打星 -->
          <!-- <Rate :value="5"/>
          <Rate :value="4"/>
          <Rate :value="3"/>
          <Rate :value="2"/>
          <Rate :value="1"/>
          <Rate :value="0"/> -->
          <!-- <Rate :value="0" theme="blue" />
          <Rate :value="1" theme="blue" />
          <Rate :value="2" theme="yellow" />
          <Rate :value="3" theme="blue" />
          <Rate :value="4" theme="yellow" /> -->
          <Rate :value="score" theme="blue" @update-rate="update" />      
          <!-- vue中的数据通信 ,update-rate为自定义事件-->
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
