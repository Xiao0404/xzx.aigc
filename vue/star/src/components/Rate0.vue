<template>
    <div>
            {{ rate }}
    </div>
</template>

<script setup>
        import {defineProps,computed} from 'vue';  // 传递和计算属性

        let props = defineProps({
            value: Number
        })

        let rate = computed(()=>"★★★★★☆☆☆☆☆".slice(5-props.value,10-props.value)) 

</script>

<style lang="scss" scoped>

</style>