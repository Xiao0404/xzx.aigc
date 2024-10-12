import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// 定义搜索关键词和历史记录
const query = ref('');
const searchHistory = ref([]);
const isFocused = ref(false);
const router = useRouter();
// 获取本地存储中的历史记录
onMounted(() => {
    const storedHistory = localStorage.getItem('searchHistory');
    if (storedHistory) {
        searchHistory.value = JSON.parse(storedHistory);
    }
});
// 监听搜索历史变化并更新 localStorage
watch(searchHistory, (newHistory) => {
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
}, { deep: true });
// 执行搜索并添加历史记录
const performSearch = async () => {
    if (query.value.trim() !== '') {
        if (!searchHistory.value.includes(query.value.trim())) {
            searchHistory.value.unshift(query.value.trim());
        }
        if (searchHistory.value.length > 10) {
            searchHistory.value.pop();
        }
        // 跳转到搜索结果页面
        await router.push({ name: 'SearchResults', query: { q: query.value.trim() } });
    }
    query.value = ''; // 清空搜索框
};
// 从历史记录中选择一个关键词
const selectHistory = (item) => {
    query.value = item; // 填充输入框
};
// 清除历史记录
const clearHistory = () => {
    searchHistory.value = [];
    localStorage.removeItem('searchHistory');
};
// 点击组件外部时隐藏历史记录
const handleClickOutside = (event) => {
    const searchBox = document.querySelector('.search-box');
    if (searchBox && !searchBox.contains(event.target)) { // 添加 null 检查
        isFocused.value = false;
    }
};
// 添加和移除点击事件监听器
onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});
onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.handleClickOutside) }, ...{ class: ("search-component") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onMouseover: (...[$event]) => {
                __VLS_ctx.isFocused = true;
                // @ts-ignore
                [handleClickOutside, isFocused,];
            } }, ...{ class: ("search-box") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onKeydown: (__VLS_ctx.performSearch) }, ...{ onFocus: (...[$event]) => {
                __VLS_ctx.isFocused = true;
                // @ts-ignore
                [isFocused, performSearch,];
            } }, value: ((__VLS_ctx.query)), type: ("text"), placeholder: ("Search..."), });
    // @ts-ignore
    [query,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ onClick: (__VLS_ctx.performSearch) }, ...{ class: ("search-icon") }, });
    // @ts-ignore
    [performSearch,];
    if (__VLS_ctx.isFocused && __VLS_ctx.searchHistory.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("history-box") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("history-title") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        // @ts-ignore
        [isFocused, searchHistory,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.clearHistory) }, });
        // @ts-ignore
        [clearHistory,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.searchHistory))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.isFocused && __VLS_ctx.searchHistory.length)))
                            return;
                        __VLS_ctx.selectHistory(item);
                        // @ts-ignore
                        [searchHistory, selectHistory,];
                    } }, key: ((index)), });
            (item);
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['search-component'];
        __VLS_styleScopedClasses['search-box'];
        __VLS_styleScopedClasses['search-icon'];
        __VLS_styleScopedClasses['history-box'];
        __VLS_styleScopedClasses['history-title'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                query: query,
                searchHistory: searchHistory,
                isFocused: isFocused,
                performSearch: performSearch,
                selectHistory: selectHistory,
                clearHistory: clearHistory,
                handleClickOutside: handleClickOutside,
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
