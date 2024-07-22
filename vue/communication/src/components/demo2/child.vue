<template>
    <div class="body">
      <ul>
        <li v-for="item in list">{{item}}</li>
      </ul>
      <!-- <p>{{ msg }}</p> -->
    </div>
</template>

<script setup>
import {ref , computed, watch,onBeforeUpdate,onUpdated} from 'vue'
const list = ref(['html','css'])

const props =  defineProps({
    msg: {
      type: String,
      default: ''
    }

  })



    // watch(
    //     () =>props.msg,
    //     (newVal,oldVal) => {
    //       list.value.push(newVal)
    //     }
    // )

    onBeforeUpdate(() => {
        // console.log(props.msg); 在html用到的变量变更了就会执行
        list.value.push(props.msg)
    })

    // onUpdated(() => {
    //     console.log(props.msg);
    //     list.value.push(props.msg)
    //     // 会一直执行,因为子组件中的list更改，onUpdated会一直执行


    // })

 

</script>

<style lang="scss" scoped>

</style>