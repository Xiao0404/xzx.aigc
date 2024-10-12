import { showSuccessToast } from 'vant';
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const show = ref(false);
const value = ref('');
const onSearch = () => {
    showSuccessToast(value.value);
};
const onCancel = () => {
    showSuccessToast(value.value);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("sticky top-0 z-50 bg-red-500 p-1 h-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ action: ("/"), ...{ class: ("w-full   p-4 flex items-center h-4") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .VanSearch;
    ({}.VanSearch);
    __VLS_components.VanSearch;
    __VLS_components.vanSearch;
    // @ts-ignore
    [VanSearch,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onSearch': {} }, ...{ 'onCancel': {} }, ...{ 'onFocus': {} }, modelValue: ((__VLS_ctx.value)), showAction: (true), placeholder: ("请输入搜索关键词"), actionText: ("搜索"), background: ("white"), ...{ class: ("fixed z-[101] h-4 w-3/4  mr-8  rounded-lg") }, shape: ("round"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onSearch': {} }, ...{ 'onCancel': {} }, ...{ 'onFocus': {} }, modelValue: ((__VLS_ctx.value)), showAction: (true), placeholder: ("请输入搜索关键词"), actionText: ("搜索"), background: ("white"), ...{ class: ("fixed z-[101] h-4 w-3/4  mr-8  rounded-lg") }, shape: ("round"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onSearch': {} }, ...{ 'onCancel': {} }, ...{ 'onFocus': {} }, modelValue: ((__VLS_ctx.value)), showAction: (true), placeholder: ("请输入搜索关键词"), actionText: ("搜索"), background: ("white"), ...{ class: ("fixed z-[101] h-4 w-3/4  mr-8  rounded-lg") }, shape: ("round"), }));
    let __VLS_6;
    const __VLS_7 = {
        onSearch: (__VLS_ctx.onSearch)
    };
    const __VLS_8 = {
        onCancel: (__VLS_ctx.onCancel)
    };
    const __VLS_9 = {
        onFocus: (...[$event]) => {
            __VLS_ctx.show = true;
            // @ts-ignore
            [value, onSearch, onCancel, show,];
        }
    };
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    let __VLS_3;
    let __VLS_4;
    // @ts-ignore
    const __VLS_10 = {}
        .VanOverlay;
    ({}.VanOverlay);
    __VLS_components.VanOverlay;
    __VLS_components.vanOverlay;
    // @ts-ignore
    [VanOverlay,];
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{ 'onClick': {} }, show: ((__VLS_ctx.show)), }));
    const __VLS_12 = __VLS_11({ ...{ 'onClick': {} }, show: ((__VLS_ctx.show)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    ({}({ ...{ 'onClick': {} }, show: ((__VLS_ctx.show)), }));
    let __VLS_16;
    const __VLS_17 = {
        onClick: (...[$event]) => {
            __VLS_ctx.show = false;
            // @ts-ignore
            [show, show,];
        }
    };
    const __VLS_15 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12));
    let __VLS_13;
    let __VLS_14;
    // @ts-ignore
    const __VLS_18 = {}
        .VanOverlay;
    ({}.VanOverlay);
    __VLS_components.VanOverlay;
    __VLS_components.vanOverlay;
    // @ts-ignore
    [VanOverlay,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({}));
    const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['sticky'];
        __VLS_styleScopedClasses['top-0'];
        __VLS_styleScopedClasses['z-50'];
        __VLS_styleScopedClasses['bg-red-500'];
        __VLS_styleScopedClasses['p-1'];
        __VLS_styleScopedClasses['h-8'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['h-4'];
        __VLS_styleScopedClasses['fixed'];
        __VLS_styleScopedClasses['z-[101]'];
        __VLS_styleScopedClasses['h-4'];
        __VLS_styleScopedClasses['w-3/4'];
        __VLS_styleScopedClasses['mr-8'];
        __VLS_styleScopedClasses['rounded-lg'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                show: show,
                value: value,
                onSearch: onSearch,
                onCancel: onCancel,
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
