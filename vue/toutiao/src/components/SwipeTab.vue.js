import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const list = ref([
    "推荐",
    "关注",
    "热榜",
    "独家",
    "原创",
    "小视频"
]);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pt-4 h-1/2  ") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .VanTabs;
    ({}.VanTabs);
    ({}.VanTabs);
    __VLS_components.VanTabs;
    __VLS_components.vanTabs;
    __VLS_components.VanTabs;
    __VLS_components.vanTabs;
    // @ts-ignore
    [VanTabs, VanTabs,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ swipeable: (true), }));
    const __VLS_2 = __VLS_1({ swipeable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ swipeable: (true), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.list))) {
        // @ts-ignore
        const __VLS_6 = {}
            .VanTab;
        ({}.VanTab);
        ({}.VanTab);
        __VLS_components.VanTab;
        __VLS_components.vanTab;
        __VLS_components.VanTab;
        __VLS_components.vanTab;
        // @ts-ignore
        [VanTab, VanTab,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ title: ((item)), }));
        const __VLS_8 = __VLS_7({ title: ((item)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ title: ((item)), }));
        const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("swipeContent") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_directiveFunction(__VLS_ctx.vShow)((index === 0));
        // @ts-ignore
        const __VLS_12 = {}
            .NewsList;
        ({}.NewsList);
        __VLS_components.NewsList;
        // @ts-ignore
        [NewsList,];
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
        const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({}));
        const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
        // @ts-ignore
        [list, vShow,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mx-auto text-center h-screen text-[0.6rem] leading-[0.6rem] mt-[0.6rem]") }, });
        __VLS_directiveFunction(__VLS_ctx.vShow)((index !== 0));
        // @ts-ignore
        [vShow,];
        __VLS_nonNullable(__VLS_11.slots).default;
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['pt-4'];
        __VLS_styleScopedClasses['h-1/2'];
        __VLS_styleScopedClasses['swipeContent'];
        __VLS_styleScopedClasses['mx-auto'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['h-screen'];
        __VLS_styleScopedClasses['text-[0.6rem]'];
        __VLS_styleScopedClasses['leading-[0.6rem]'];
        __VLS_styleScopedClasses['mt-[0.6rem]'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                list: list,
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
