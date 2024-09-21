import ProductCard from '../components/product/ProductCard.vue';
import { ref } from 'vue';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useWaterfallStore } from '../stores/waterFall';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const waterfallStore = useWaterfallStore();
const cards = ref(waterfallStore.cards);
const hasMore = ref(true);
const itemRef = ref(null);
const { setHasMore } = useIntersectionObserver(itemRef, () => {
    handleNextPage(setHasMore);
});
const handleNextPage = async (setHasMore) => {
    // 模拟异步请求
    const newCards = await new Promise((resolve) => {
        setTimeout(() => {
            const fetchedCards = Array.from({ length: 10 }, (_, i) => ({
                id: i + cards.value.length + 1,
                title: `Card ${i + cards.value.length + 1}`,
                description: `Description ${i + cards.value.length + 1}`,
                img: `https://via.placeholder.com/300x${400 + i * 50}`,
                width: 300,
                height: 400 + i * 50,
            }));
            resolve(fetchedCards);
        }, 1000);
    });
    if (newCards.length > 0) {
        waterfallStore.setCards([...cards.value, ...newCards]);
        cards.value = waterfallStore.cards;
    }
    else {
        setHasMore(false);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("waterfall-container") }, });
    for (const [card] of __VLS_getVForSourceType((__VLS_ctx.cards))) {
        // @ts-ignore
        [ProductCard,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(ProductCard, new ProductCard({ key: ((card.id)), card: ((card)), }));
        const __VLS_1 = __VLS_0({ key: ((card.id)), card: ((card)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        ({}({ key: ((card.id)), card: ((card)), }));
        const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(ProductCard, __VLS_1));
        // @ts-ignore
        [cards,];
    }
    if (!__VLS_ctx.hasMore) {
        // @ts-ignore
        const __VLS_5 = {}
            .VanDivider;
        ({}.VanDivider);
        ({}.VanDivider);
        __VLS_components.VanDivider;
        __VLS_components.vanDivider;
        __VLS_components.VanDivider;
        __VLS_components.vanDivider;
        // @ts-ignore
        [VanDivider, VanDivider,];
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ dashed: (true), ...{ style: ({}) }, }));
        const __VLS_7 = __VLS_6({ dashed: (true), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        ({}({ dashed: (true), ...{ style: ({}) }, }));
        const __VLS_10 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7));
        // @ts-ignore
        [hasMore,];
        __VLS_nonNullable(__VLS_10.slots).default;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['waterfall-container'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                ProductCard: ProductCard,
                cards: cards,
                hasMore: hasMore,
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
