<template>
  <div>
    <!-- {{ x }}  {{ y }} -->
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos">
        <input type="checkbox" v-model="todo.done">
        <span :class="{done:todo.done}" >{{  todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选 <input type="checkbox" v-model="allDone" />
      <span>{{ active }} / {{ all }}</span>
    </div>
  </div>
</template>

<script setup>
// import {onMounted, ref} from 'vue'
// import { useMouse } from './hooks/useMouse'
// // 坐标逻辑 
// const x = ref(0);
// const y = ref(0);
// const update = (event) =>{
//    x.value = event.clientX;
//    y.value = event.clientY;
// }

// // 鼠标悬停的坐标
// onMounted(() => {
//     window.addEventListener('mousemove', update)
// })

// const {x,y} = useMouse()


import { useTodos } from './hooks/useTodos'
// 项目间的复用  vueuse hooks 第三方库 
const { title,active,allDone,clear,todos,all,addTodo } = useTodos()

</script>

<style lang="scss" scoped>

</style>