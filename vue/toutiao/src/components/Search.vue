<template>
   <div class="sticky top-0 z-50 bg-red-500 p-1 h-8">
        <form action="/" class="w-full   p-4 flex items-center h-4">
            <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" action-text="搜索"
                @cancel="onCancel" @focus="show = true"  background="white"
                class="fixed z-[101] h-4 w-3/4  mr-8  rounded-lg"   shape="round"/>
        </form>




        <van-overlay :show="show" @click="show = false" />

        <van-overlay />
    </div>
</template>

<script lang="ts" setup>
import { showSuccessToast,Overlay,Search,Icon } from 'vant';

import { ref } from 'vue'

const show = ref(false)
const value = ref('')

const onSearch = () => {
    showSuccessToast(value.value);
}
const onCancel = () => {
    showSuccessToast(value.value);
}

</script>

<style></style>