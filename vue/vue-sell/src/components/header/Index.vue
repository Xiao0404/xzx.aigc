<template>
    <div class="header" @click="showDetail = true">
        <div class="content-wrapper">
            <div class="avatar">
                <img :src="seller.avatar" alt="">
            </div>
            <div class="content">
                <div class="title">
                    <div class="brand"></div>
                    <div class="name">{{ seller.name }}</div>
                </div>
                <div class="description">
                    {{ seller.description }},{{ seller.deliveryTime }}分钟送达
                </div>
               <div class="support" v-if="seller.supports && seller.supports.length > 0">
                    <SupportIcon :type="seller.supports[0].type" size="2" />
                    <span class="text">{{ seller.supports[0].description }}</span>
                </div>
            </div>
            <div class="support-count" v-if="seller.supports">
                <span class="count">{{ seller.supports.length }}个</span>
                <i class="iconfont icon-xiangyoujiantou"></i>
            </div>
        </div>
        <div class="bulletion-wrapper">
            <span class="bulletion-title"></span>
            <span class="bulletion-text">{{ seller.bulletin }}</span>
            <i class="iconfont icon-xiangyoujiantou"></i>
        </div>
        <div class="bg"></div>

        <HeaderDetail v-if="showDetail" @hidden="handle" :seller="seller" />
    </div>
</template>

<script setup>
            import SupportIcon from '@/components/support-icon/Index.vue';
            import {ref,defineProps,computed} from 'vue';
            import HeaderDetail from '@/components/header-detail/Index.vue';

                        const bg = computed(() => {
                return `url(${props.seller?.avatar})`
            })

                    const props = defineProps({
                         seller: {
                            type: Object,
                            default: () => ({})
                                }
                     });

                     const handle = (e) => {
                             // console.log(e);
                             showDetail.value = e
                        }

                        let showDetail = ref(false);

</script>

<style lang="less" scoped>
@import '@/assets/variable.less';
@import '@/assets/mixin.less';

.header {
    color: @color-white;
    position: relative;
    background:@color-background-ss;
    // background: url("https://imgs.aixifan.com/newUpload/28485006_a6ccd5618f8541308215eae634b9f0ce.jpeg");
    // background-size: 100% 100%;

    
    
    .content-wrapper {
        display: flex;
        padding: 24px 12px 18px 24px;
        position: relative;

        .avatar {
            width: 64px;
            height: 64px;
            overflow: hidden;
            border-radius: 3px;
            img {
                width: 100%;

            }
        }

        .content{
            flex: 1;
            margin-left: 25px;

            .title{
                margin-bottom: 8px;
                display: flex;

                .brand{
                    width: 30px;
                    height: 18px;
                    display: inline-block;
                    // background-image: url('./brand@2x.png'); //图片的大小需与手机的大小匹配，大小为手机像素与宽高的比
                    .bg-image('brand');
                    background-size: 100% 100%;

                }
                
                .name{
                   font-size: @fontsize-large;
                   margin-left: 6px;
                   font-weight: bold;
                }

            }

         .description{
                font-size: @fontsize-small;
                margin-bottom: 18px;
                line-height: 1.5;
            }

        .support{
            display: flex;
            align-items: center; // y轴居中
           

           .text {
                font-size: @fontsize-small-s;
                margin-left: 6px;
            }

        }

        }
        .support-count{
            position:absolute;
            right: 12px;
            bottom: 14px;
            height: 24px;
            line-height: 24px;
            background-color: @color-background-sss;
            border-radius: 14px;
            padding: 0 8px;
            display: flex;
            align-items: center;

            .count{
                font-size: @fontsize-small-s;
            }
            .iconfont{
                font-size: @fontsize-small-s;
                margin-left: 2px;

            }
        }

    }
    
    .bulletion-wrapper{
        display: flex;
        align-items: center;
        height: 28px;
        padding: 0 8px;
        background: @color-background-sss;

        .bulletion-title{
            flex: 0 0 22px;
            height: 12px;
            .bg-image('bulletin');
            background-size: 100% 100%;
        }
        .bulletion-text{
      flex: 1;
      margin-left: 4px;
      font-size: @fontsize-small-s;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .icon-xiangyoujiantou{
      flex: 0 0 10px;
      font-size: 8px;
    }
    }

    .bg{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: v-bind(bg);
        background-size: 100% 100%;
        z-index: -1;
       filter: blur(3px);
    }
}
</style>