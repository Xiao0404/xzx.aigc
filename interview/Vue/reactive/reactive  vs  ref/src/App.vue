<template>
  <div>
   <h2>{{ state.msg }}</h2>
   <h2>{{ state.data.name }}</h2>
   <button @click="changeName">修改</button>
  </div>
</template>

<script >

import {reactive} from './reactivity/reactive'
import {effect} from './reactivity/effect'
import {ref} from './reactivity/ref'
export default {
  setup(){
    const state = reactive({
      msg:'hello',
      data:{
        name:'xyao'
      }
    })

    const num = ref({a:1})
    num.value.a = 100
    console.log(num.value);
    
    
 const changeName = () =>{
    state.msg = 'xxx'
 }
    
//  effect(() =>{
//   console.log(`${state.data.name[0]} --- ${state.msg}`);
//  },{lazy:false})

    effect(() =>{
      console.log(num.value * 100);
      
    },{lazy:false})

    return {state,changeName}
  }
}
</script>

<style lang="scss" scoped>

</style>