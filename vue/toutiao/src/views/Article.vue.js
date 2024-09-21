import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useNewsStore } from '../stores/news';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const router = useRouter();
const newsStore = useNewsStore();
const articleId = parseInt(route.params.id, 10);
const article = computed(() => newsStore.getNewsById(articleId));
const back = () => {
    router.back();
};
const toggleAttention = () => {
    if (article.value) {
        article.value.attention = !article.value.attention;
    }
};
const toggleLike = () => {
    if (article.value) {
        article.value.islike = !article.value.islike;
    }
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
    // @ts-ignore
    const __VLS_0 = {}
        .ElContainer;
    ({}.ElContainer);
    ({}.ElContainer);
    __VLS_components.ElContainer;
    __VLS_components.elContainer;
    __VLS_components.ElContainer;
    __VLS_components.elContainer;
    // @ts-ignore
    [ElContainer, ElContainer,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    const __VLS_6 = {}
        .ElHeader;
    ({}.ElHeader);
    ({}.ElHeader);
    __VLS_components.ElHeader;
    __VLS_components.elHeader;
    __VLS_components.ElHeader;
    __VLS_components.elHeader;
    // @ts-ignore
    [ElHeader, ElHeader,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({}));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    // @ts-ignore
    const __VLS_12 = {}
        .ElButton;
    ({}.ElButton);
    ({}.ElButton);
    __VLS_components.ElButton;
    __VLS_components.elButton;
    __VLS_components.ElButton;
    __VLS_components.elButton;
    // @ts-ignore
    [ElButton, ElButton,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onClick': {} }, }));
    const __VLS_14 = __VLS_13({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ ...{ 'onClick': {} }, }));
    let __VLS_18;
    const __VLS_19 = {
        onClick: (__VLS_ctx.back)
    };
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
    let __VLS_15;
    let __VLS_16;
    // @ts-ignore
    [back,];
    __VLS_nonNullable(__VLS_17.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    (__VLS_ctx.article?.title);
    // @ts-ignore
    [article,];
    __VLS_nonNullable(__VLS_11.slots).default;
    // @ts-ignore
    const __VLS_20 = {}
        .ElMain;
    ({}.ElMain);
    ({}.ElMain);
    __VLS_components.ElMain;
    __VLS_components.elMain;
    __VLS_components.ElMain;
    __VLS_components.elMain;
    // @ts-ignore
    [ElMain, ElMain,];
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
    const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({}));
    const __VLS_25 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22));
    // @ts-ignore
    const __VLS_26 = {}
        .ElCard;
    ({}.ElCard);
    ({}.ElCard);
    __VLS_components.ElCard;
    __VLS_components.elCard;
    __VLS_components.ElCard;
    __VLS_components.elCard;
    // @ts-ignore
    [ElCard, ElCard,];
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{ class: ("article-card") }, }));
    const __VLS_28 = __VLS_27({ ...{ class: ("article-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ ...{ class: ("article-card") }, }));
    const __VLS_31 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("article-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("avatar") }, ...{ style: (({ backgroundImage: `url(${__VLS_ctx.article?.avatar})` })) }, });
    // @ts-ignore
    [article,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    (__VLS_ctx.article?.source);
    // @ts-ignore
    [article,];
    // @ts-ignore
    const __VLS_32 = {}
        .ElTag;
    ({}.ElTag);
    ({}.ElTag);
    __VLS_components.ElTag;
    __VLS_components.elTag;
    __VLS_components.ElTag;
    __VLS_components.elTag;
    // @ts-ignore
    [ElTag, ElTag,];
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({}));
    const __VLS_34 = __VLS_33({}, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({}));
    const __VLS_37 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34));
    (__VLS_ctx.article?.time);
    // @ts-ignore
    [article,];
    __VLS_nonNullable(__VLS_37.slots).default;
    // @ts-ignore
    const __VLS_38 = {}
        .ElButton;
    ({}.ElButton);
    ({}.ElButton);
    __VLS_components.ElButton;
    __VLS_components.elButton;
    __VLS_components.ElButton;
    __VLS_components.elButton;
    // @ts-ignore
    [ElButton, ElButton,];
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ ...{ 'onClick': {} }, }));
    const __VLS_40 = __VLS_39({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    ({}({ ...{ 'onClick': {} }, }));
    let __VLS_44;
    const __VLS_45 = {
        onClick: (__VLS_ctx.toggleAttention)
    };
    const __VLS_43 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40));
    let __VLS_41;
    let __VLS_42;
    (__VLS_ctx.article?.attention ? 'Unfollow' : 'Follow');
    // @ts-ignore
    [article, toggleAttention,];
    __VLS_nonNullable(__VLS_43.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.article?.description);
    // @ts-ignore
    [article,];
    if (__VLS_ctx.article?.img) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.article.img)), alt: ("article image"), });
        // @ts-ignore
        [article, article,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("intro") }, });
    (__VLS_ctx.article?.intro);
    // @ts-ignore
    [article,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tags") }, });
    for (const [tag] of __VLS_getVForSourceType((__VLS_ctx.article?.tags))) {
        // @ts-ignore
        const __VLS_46 = {}
            .ElTag;
        ({}.ElTag);
        ({}.ElTag);
        __VLS_components.ElTag;
        __VLS_components.elTag;
        __VLS_components.ElTag;
        __VLS_components.elTag;
        // @ts-ignore
        [ElTag, ElTag,];
        // @ts-ignore
        const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ key: ((tag)), }));
        const __VLS_48 = __VLS_47({ key: ((tag)), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
        ({}({ key: ((tag)), }));
        const __VLS_51 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48));
        (tag);
        // @ts-ignore
        [article,];
        __VLS_nonNullable(__VLS_51.slots).default;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("like-container") }, });
    // @ts-ignore
    const __VLS_52 = {}
        .ElButton;
    ({}.ElButton);
    ({}.ElButton);
    __VLS_components.ElButton;
    __VLS_components.elButton;
    __VLS_components.ElButton;
    __VLS_components.elButton;
    // @ts-ignore
    [ElButton, ElButton,];
    // @ts-ignore
    const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({ ...{ 'onClick': {} }, type: ((__VLS_ctx.article?.islike ? 'danger' : 'info')), }));
    const __VLS_54 = __VLS_53({ ...{ 'onClick': {} }, type: ((__VLS_ctx.article?.islike ? 'danger' : 'info')), }, ...__VLS_functionalComponentArgsRest(__VLS_53));
    ({}({ ...{ 'onClick': {} }, type: ((__VLS_ctx.article?.islike ? 'danger' : 'info')), }));
    let __VLS_58;
    const __VLS_59 = {
        onClick: (__VLS_ctx.toggleLike)
    };
    const __VLS_57 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54));
    let __VLS_55;
    let __VLS_56;
    // @ts-ignore
    const __VLS_60 = {}
        .ElIcon;
    ({}.ElIcon);
    ({}.ElIcon);
    __VLS_components.ElIcon;
    __VLS_components.elIcon;
    __VLS_components.ElIcon;
    __VLS_components.elIcon;
    // @ts-ignore
    [ElIcon, ElIcon,];
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ name: ((__VLS_ctx.article?.islike ? 'thumb-up' : 'thumb-down')), }));
    const __VLS_62 = __VLS_61({ name: ((__VLS_ctx.article?.islike ? 'thumb-up' : 'thumb-down')), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    ({}({ name: ((__VLS_ctx.article?.islike ? 'thumb-up' : 'thumb-down')), }));
    const __VLS_65 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62));
    // @ts-ignore
    [article, article, toggleLike,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.article?.like_num);
    // @ts-ignore
    [article,];
    __VLS_nonNullable(__VLS_57.slots).default;
    __VLS_nonNullable(__VLS_31.slots).default;
    __VLS_nonNullable(__VLS_25.slots).default;
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['article-card'];
        __VLS_styleScopedClasses['article-header'];
        __VLS_styleScopedClasses['avatar'];
        __VLS_styleScopedClasses['intro'];
        __VLS_styleScopedClasses['tags'];
        __VLS_styleScopedClasses['like-container'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                article: article,
                back: back,
                toggleAttention: toggleAttention,
                toggleLike: toggleLike,
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
