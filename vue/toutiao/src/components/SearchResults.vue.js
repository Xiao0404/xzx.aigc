import { ref, onMounted } from 'vue';
import NewsCard from './NewsCard.vue';
import { useRoute } from 'vue-router';
import { performSearch } from './search/search.js'; // 导入 performSearch 函数
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const results = ref([]);
const loading = ref(true); // 添加加载状态
onMounted(async () => {
    const query = route.query.q; // 获取查询参数
    if (query) {
        results.value = await performSearch(query); // 调用 performSearch 函数
    }
    loading.value = false; // API 响应后更新加载状态
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("search-results") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    if (__VLS_ctx.loading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        // @ts-ignore
        [loading,];
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        for (const [news] of __VLS_getVForSourceType((__VLS_ctx.results))) {
            // @ts-ignore
            [NewsCard,];
            // @ts-ignore
            const __VLS_0 = __VLS_asFunctionalComponent(NewsCard, new NewsCard({ key: ((news.id)), news: ((news)), }));
            const __VLS_1 = __VLS_0({ key: ((news.id)), news: ((news)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
            ({}({ key: ((news.id)), news: ((news)), }));
            const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(NewsCard, __VLS_1));
            // @ts-ignore
            [results,];
        }
        if (__VLS_ctx.results.length === 0) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            // @ts-ignore
            [results,];
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['search-results'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                NewsCard: NewsCard,
                results: results,
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
