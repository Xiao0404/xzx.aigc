import { ref, computed } from 'vue';
import NewsCard from './NewsCard.vue';
import { useNewsStore } from '@/stores/news';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const newsStore = useNewsStore();
const newsList = computed(() => newsStore.newsList);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news-list") }, });
    for (const [news] of __VLS_getVForSourceType((__VLS_ctx.newsList))) {
        // @ts-ignore
        [NewsCard,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(NewsCard, new NewsCard({ key: ((news.id)), news: ((news)), }));
        const __VLS_1 = __VLS_0({ key: ((news.id)), news: ((news)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        ({}({ key: ((news.id)), news: ((news)), }));
        const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(NewsCard, __VLS_1));
        // @ts-ignore
        [newsList,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['news-list'];
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
                newsList: newsList,
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
