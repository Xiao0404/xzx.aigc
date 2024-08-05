<template>
    <div class="login">
        <h1>登录</h1>
        <div class="login-wrapper">
            <div class="avatar">
                <img src="https://img0.baidu.com/it/u=961861912,637625582&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500" alt="">
            </div>
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field
                    v-model="username"
                    name="username"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                    />
                    <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                    />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                    登录
                    </van-button>
                </div>
            </van-form>

        </div>

        <p class="register" @click="router.push('/register')">新用户？点击这里注册</p>
    </div>
        
</template>

<script setup>
    import { ref } from 'vue'
    import axios from '@/api'
    import { useRouter} from 'vue-router';
    const username = ref('') 
    const password = ref('')

    const router = useRouter()


    const onSubmit = async(values) => {
        // 向后端发请求，将账号密码传给后端
           const res = await  axios.post('/user/login', values)
            console.log(res);
            localStorage.setItem('userInfo', JSON.stringify(res.data))
            localStorage.setItem('token', res.token)

            router.push('/noteClass')

    }


</script>

<style lang="less" scoped>
    .login{
        width: 100vw;
        height: 100vh;
        background: #fff;
        padding: 0 0.3rem;
        // 用IE的标准，默认是谷歌浏览器的标准
        box-sizing: border-box; 
        // bfc 容器
        overflow: hidden;
        position: relative;
        h1{
            height: 0.6933rem;
            font-size: 0.48rem;
            text-align: center;
            line-height: 0.6933rem;
            // margin 重叠，子容器把父容器带下了
            margin-top: 1.12rem;
            
        }
        .login-wrapper{
    width: 7.44rem;
    border: 1px solid rgba(187, 187, 187, 1);
    margin: 0 auto;
    margin-top: 1.7rem;
    border-radius: 0.3rem;
    box-shadow: 0 0 0.533rem 0 rgba(170, 170, 170, 1);
    padding-bottom: 15px;
    border-bottom: 15px ;
    .avatar{
      width: 2.4rem;
      height: 2.4rem;
      margin: 1rem auto 0.77rem;
      border-radius: 50%;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
  }
        .register{
            position:absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);

        }

    }
    // :deep 深度修改 组件中的样式
    :deep(.van-field__label){
        width: 45px;
    }

</style>