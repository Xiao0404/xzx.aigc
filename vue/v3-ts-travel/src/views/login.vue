<template>
    <div class="w-screen h-screen">
        <van-nav-bar left-arrow>
            <template #right>
                <span class="text-cs text-gray-400">遇到问题</span>
            </template> 
        </van-nav-bar>
        <h1 class="text-2xl font-bold text-center my-10">登录</h1>
        <van-form @submit="onSubmit" model="params">
            <van-cell-group inset>
                <van-field v-model="params.username"
                    name="用户名"
                    label="用户名"
                    placeholder="请输入用户名"
                    :rules="[{ required: true, message: '请输入用户名' }]"
                />
                <van-field
                    v-model="params.password"
                    name="密码"
                    label="密码"
                    placeholder="请输入密码"
                    type="password"
                    :rules="[{ required: true, message: '请输入密码' }]"
                 />
                
            </van-cell-group>
            <div style="mt-4">
                <van-button block color="#d2d2d2" native-type="submit">登录</van-button>
            </div>
            <div class="text-center" @click="toRegister">
                没有账号？点击注册
            </div>
            <span class="text-ms ml-4 text-[#e6723c]" v-if="!checked">请先同意必选条款</span>
            <van-field name="checkbox">
                <template #input>
                   <van-checkbox v-model="checked" shape="square">
                    <span class="text-xs ml-2">(必选)我同意<a href="#">《用户协议》</a>和<a href="#">《使用条款》</a></span>
                   </van-checkbox>
                </template>

            </van-field>
        </van-form>
    </div>
</template>

<script setup lang="ts">
import { reactive,ref } from "vue"
import { useRouter } from "vue-router";
// vant 表单
// ts 类型约束
// 记住 
// 组件的私有状态 与 pinia不同的是 只能在该组件内使用

// 组件内可以声明
// type 类型 约束
// interface 接口 约束
interface LoginInfo{
    username: string;
    password: string;

}

const params = reactive<LoginInfo>({
    username: '',
    password: ''
})

const checked = ref<boolean>(false)

const router = useRouter() 

const onSubmit = () => {
    console.log(params);
}

const toRegister = () => {
    router.push('/register')

}


</script>

<style  scoped>
    :deep(.van-icon-arrow-left) {
        /* tailwind特性 @apply 再添加 */
        @apply text-2xl  text-black 
    }

    :deep(.van-checkbox__icon--checked .van-icon){
        @apply bg-[#e6723c] border-[#e6723c]

    }
</style>