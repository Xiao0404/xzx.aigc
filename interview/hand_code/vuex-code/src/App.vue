<template>
  <div>
    {{ count }}
  </div>
</template>

<script setup>
import { computed } from 'vue'
// use 开头，特别方便
import { useStore } from './store/gvuex'
const store = useStore();
const count = computed(() => store.state.count)
 // store.state.count++;
 store.dispatch('asyncAdd')

</script>

<style lang="scss" scoped>

</style>