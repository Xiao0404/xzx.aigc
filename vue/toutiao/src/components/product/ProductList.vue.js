import WaterFall from '../WaterFall.vue';
import { ref, onMounted } from 'vue';
import { useWaterfallStore } from '@/stores/waterFall';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const waterfallStore = useWaterfallStore();
const loading = ref(false);
const currentPage = ref(1);
const pageSize = 10;
// 页面挂载时获取初始数据
onMounted(async () => {
    loading.value = true;
    await fetchCards();
    loading.value = false;
});
const fetchCards = async () => {
    // 模拟异步请求
    const newCards = await new Promise((resolve) => {
        setTimeout(() => {
            const fetchedCards = Array.from({ length: pageSize }, (_, i) => ({
                id: i + 1,
                title: `Card ${i + 1}`,
                description: `Description ${i + 1}`,
                img: `https://via.placeholder.com/300x${400 + i * 50}`,
                width: 300,
                height: 400 + i * 50,
            }));
            resolve(fetchedCards);
        }, 1000);
    });
    waterfallStore.setCards(newCards);
};
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    [WaterFall,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(WaterFall, new WaterFall({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({}));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(WaterFall, __VLS_1));
    if (__VLS_ctx.loading) {
        // @ts-ignore
        const __VLS_5 = {}
            .VanLoading;
        ({}.VanLoading);
        ({}.VanLoading);
        __VLS_components.VanLoading;
        __VLS_components.vanLoading;
        __VLS_components.VanLoading;
        __VLS_components.vanLoading;
        // @ts-ignore
        [VanLoading, VanLoading,];
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ size: ("12px"), ...{ style: ({}) }, }));
        const __VLS_7 = __VLS_6({ size: ("12px"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        ({}({ size: ("12px"), ...{ style: ({}) }, }));
        const __VLS_10 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7));
        // @ts-ignore
        [loading,];
        __VLS_nonNullable(__VLS_10.slots).default;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                WaterFall: WaterFall,
                loading: loading,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
