<template>
    <div class="header">
      <input type="text" v-model="newMsg">
      <button @click="add">确定</button>
    </div>
</template>

<script setup>
import { ref , defineProps,defineEmits} from 'vue'
const newMsg = ref('')
const emits = defineEmits(['update:list'])


const add = () => {
    // props.list.push(newMsg.value)
    // 不推荐
    const arr = props.list
    arr.push(newMsg.value)
    emits('update:list',arr)
}
const props = defineProps({
  list:[]
})

</script>

<style lang="scss" scoped>

</style>