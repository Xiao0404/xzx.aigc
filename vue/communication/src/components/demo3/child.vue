<template>
    <div class="header">
      <input type="text" v-model="newMsg">
      <button @click="add">确定</button>
    </div>
</template>

<script setup>
import { ref,defineEmits } from 'vue';
    const newMsg = ref('')
    const emits = defineEmits(['addMsg'])  // 定义事件

    const add = () => {
        emits('addMsg',newMsg.value)  // 发布 ,顺序是先订阅后发布

    }
</script>

<style lang="scss" scoped>

</style>