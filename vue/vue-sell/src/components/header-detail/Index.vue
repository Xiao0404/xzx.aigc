<template>
    <Transition name="fade">
        <div class="header-detail">
            <div class="detail-wrapper">
                <div class="detail-main">
                    <h1 class="name">{{ seller.name }}</h1>
                    <div class="star-wrapper">
                        ♥♥♥♥♥
                    </div>
                    <div class="title">
                        <span>优惠信息</span>
                    </div>

                    <ul class="supports">
                        <li class="supports-item" v-for="item in seller.supports" :key="item.type">
                            <SupportIcon size="2" :type="item.type" />
                            <span>{{ item.description }}</span>
                        </li>
                    </ul>

                    <div class="title">
                        <span>商家公告</span>
                    </div>
                    <div class="bulletin">
                        <p class="content">
                            {{ seller.bulletin }}
                        </p>
                    </div>

                </div>
            </div>


            <div class="detail-close" @click.stop="hide">
                <i class="iconfont icon-guanbi1"></i>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import SupportIcon from '@/components/support-icon/Index.vue'

const emits = defineEmits(['hidden'])
const hide = () => {
    // 发布事件 携带值
    emits('hidden', false)
}



const props = defineProps({
    seller: {
        type: Object,
        default: () => { }
    }
})
</script>

<style lang="less" scoped>
@import '@/assets/variable.less';

.header-detail {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: @color-background-s;
    color: @color-white;
    backdrop-filter: blur(10px);

    &.v-enter-active,
    &.v-leave-active {
        transition: opacity 0.5s ease;
    }

    &.v-enter-from,
    &.v-leave-to {
        opacity: 0;
    }

    .detail-wrapper {
        width: 100%;
        min-height: 100%;
        overflow: auto;

        .detail-main {
            margin-top: 64px;
            padding-bottom: 64px;

            .name {
                text-align: center;
                font-size: @fontsize-large;
                font-weight: bold;
                line-height: 16px;
            }

            .star-wrapper {
                padding: 2px 0;
                margin-top: 8px;
                text-align: center;

            }

            .title {
                width: 80%;
                margin: 28px auto 24px auto;
                text-align: center;
                display: flex;
                align-items: center;

                &::before,
                &::after {
                    content: '';
                    height: 1px;
                    background: #fff;
                    flex: 1;
                    opacity: 0.2;
                }

                span {
                    font-size: @fontsize-medium;
                    padding: 0 12px;
                    font-weight: bold;

                }


            }

            .supports {
                width: 80%;
                margin: 0 auto;

                &-item {
                    display: flex;
                    margin-bottom: 12px;
                    padding: 0 12px;
                    align-items: center;

                    span {
                        font-size: @fontsize-small;
                        margin-left: 6px;
                    }
                }
            }

            .bulletin {
                width: 80%;
                margin: 0 auto;

                .content {
                    padding: 0 12px;
                    font-size: @fontsize-small;
                    line-height: 24px;
                }
            }

        }
    }


    .detail-close {
        position: absolute;
        left: 50%;
        bottom: 30px;
        transform: translate(-50%, 0);

        .icon-close {
            font-size: @fontsize-large-xxxx;
        }
    }


}
</style>
