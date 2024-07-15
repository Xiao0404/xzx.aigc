<template>
    <div class="goods">
      <div class="goods-content">
        <div class="menu-wrap">
            <ul>
                <li class="menu-item" v-for="(item,index) in state.goods" :key="index">
                    <span class="text">
                        <SupportIcon size="3" :type="item.type" v-if="item.type >=0"/>
                        {{ item.name }}
                    </span>
                </li>
            </ul>
        </div>
        <div class="foods-wrap">
  
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
        import SupportIcon from '@/components/support-icon/Index.vue';
        import {getGoods } from '@/api';
        import {reactive,onMounted} from 'vue';

        getGoods().then(res => {
            console.log(res);
           state.goods = res;

        })

        const state = reactive({
            goods:[]

        })


  </script>
  
  <style lang="less" scoped>
  @import '@/assets/variable.less';
  
  .goods{
    width: 100%;
    position: absolute;
    bottom: 46px;
    top: 187px;
    overflow: hidden;
    .goods-content{
      display: flex;
      height: 100%;
      
      .menu-wrap{
        flex: 0 0 80px;
        background-color: @color-background-ssss;
        .menu-item{
            padding: 0 14px;
            font-size: @fontsize-small;
            height: 54px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
      }
    }
  }
  </style>