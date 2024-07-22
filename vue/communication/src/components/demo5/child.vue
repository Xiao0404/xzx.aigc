<template>
     <div class="header">
      <input type="text" v-model="newMsg">
      <button @click="add">确定</button>
    </div>
</template>

<script setup>
import { ref , defineExpose} from 'vue';
  
  const newMsg = ref('')
  const list = ref(['html', 'css'])
  
  const add = () => {
    list.value.push(newMsg.value)
  }
  defineExpose({ list })    
//   子组件心甘情愿暴露出来list

</script>

<style lang="scss" scoped>

</style>