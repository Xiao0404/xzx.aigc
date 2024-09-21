import { ref, reactive, watch } from 'vue';
import { useRouter } from 'vue-router';
import getCozeData from '@/api/chatCoze';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const back = () => {
    router.back();
};
// 用户提出的问题
const newQuestion = ref("");
// AI回答的原始数据
const ans = reactive([]);
// 用于存储问答消息
const messages = reactive([]);
const isLoading = ref(false);
// 推荐询问的问题
const recommendQuestion = ref([]);
// 判断是不是follow_up类型的返回
const isFollowUp = (temp) => {
    console.log('Received follow up messages:', temp); // 添加这行调试输出
    recommendQuestion.value = [];
    for (let i = 0; i < temp.messages.length; i++) {
        if (temp.messages[i].type === 'follow_up') {
            recommendQuestion.value.push(temp.messages[i].content);
            console.log('Added follow up question:', temp.messages[i].content); // 添加这行调试输出
        }
    }
};
// 提交按钮发送请求到bot
const submit = async () => {
    if (!newQuestion.value.trim())
        return; // 确保输入非空
    try {
        const question = newQuestion.value;
        // 将提出的问题推到消息列表中
        messages.push({ type: 'question', content: question, isRaw: true });
        newQuestion.value = ''; // 清空输入框
        isLoading.value = true;
        const temp = await getCozeData(question);
        console.log(temp, '-----------------------------------');
        isLoading.value = false;
        ans.push({ data: temp.data, visited: false });
        console.log('---数据已添加------');
        // console.log(temp.data);
        isFollowUp({ messages: temp.data.messages });
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
};
const recommendClick = (item) => {
    newQuestion.value = item;
    submit();
};
// 返回最终回答的数据
const contentAnalyze = (content) => {
    const detailIndex = content.indexOf('摘要:');
    const photoIndex = content.indexOf('封面:');
    if (detailIndex === -1 || photoIndex === -1) {
        return content;
    }
    const ansContent = content.substring(0, detailIndex).trim();
    const ansDetail = content.substring(detailIndex + 3, photoIndex).trim();
    const ansPicture = content.substring(photoIndex + 3).trim();
    return [ansContent, ansDetail, ansPicture];
};
// 使用 watch 监听 ans 的变化
watch(ans, (newVal) => {
    // 当 ans 的值发生变化时，执行以下代码
    const filteredAns = newVal.filter(item => item && !item.visited);
    // 获取最后一个元素的 messages 数组长度
    const len = filteredAns.length;
    if (len > 0) {
        const lastItemMessages = filteredAns[len - 1].data.messages;
        // 遍历最后一个元素的 messages
        for (let i = 0; i < lastItemMessages.length; i++) {
            if (lastItemMessages[i].type === 'answer') {
                if (contentAnalyze(lastItemMessages[i].content) === lastItemMessages[i].content) {
                    messages.push({ type: 'answer', content: lastItemMessages[i].content, isRaw: true });
                }
                else {
                    const finalRes = contentAnalyze(lastItemMessages[i].content);
                    messages.push({ type: 'answer', content: finalRes, isRaw: false });
                }
                // 将符合条件的消息添加到 messages
                messages.push({ type: 'answer', content: lastItemMessages[i].content });
                console.log('---------', messages);
            }
        }
    }
}, { deep: true }); // 添加 deep 选项来监听深层属性的变化
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
        .VanIcon;
    ({}.VanIcon);
    __VLS_components.VanIcon;
    __VLS_components.vanIcon;
    // @ts-ignore
    [VanIcon,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, name: ("arrow-left"), size: ("20px"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, name: ("arrow-left"), size: ("20px"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClick': {} }, name: ("arrow-left"), size: ("20px"), }));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (__VLS_ctx.back)
    };
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    let __VLS_3;
    let __VLS_4;
    // @ts-ignore
    [back,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container bg-gradient-to-b from-pink-300 to-white-200") }, });
    // @ts-ignore
    const __VLS_8 = {}
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
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ dashed: (true), ...{ style: (({ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' })) }, }));
    const __VLS_10 = __VLS_9({ dashed: (true), ...{ style: (({ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ dashed: (true), ...{ style: (({ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' })) }, }));
    const __VLS_13 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10));
    __VLS_nonNullable(__VLS_13.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container-greet") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("dialogue") }, });
    for (const [msg, index] of __VLS_getVForSourceType((__VLS_ctx.messages))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((index)), });
        if (msg.type === 'question' && msg.isRaw === true) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dialogue-question") }, });
            (msg.content);
            // @ts-ignore
            [messages,];
        }
        if (msg.type === 'answer' && msg.isRaw === true) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dialogue-answer__isRaw") }, });
            (msg.content);
        }
        if (msg.type === 'answer' && msg.isRaw === false) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dialogue-answer__notRaw") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("dialogue-answer__notRaw-content") }, });
            (msg.content[0]);
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((msg.content[1])), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("image") }, });
            // @ts-ignore
            const __VLS_14 = {}
                .VanNoticeBar;
            ({}.VanNoticeBar);
            __VLS_components.VanNoticeBar;
            __VLS_components.vanNoticeBar;
            // @ts-ignore
            [VanNoticeBar,];
            // @ts-ignore
            const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ scrollable: (true), text: ("点击图片可查看汽车详情哦！"), }));
            const __VLS_16 = __VLS_15({ scrollable: (true), text: ("点击图片可查看汽车详情哦！"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
            ({}({ scrollable: (true), text: ("点击图片可查看汽车详情哦！"), }));
            const __VLS_19 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16));
            __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((msg.content[2])), });
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: (" inputAndRecommend") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("recommendList") }, });
    if (!__VLS_ctx.isLoading) {
        for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.recommendQuestion))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                        if (!((!__VLS_ctx.isLoading)))
                            return;
                        __VLS_ctx.recommendClick(item);
                        // @ts-ignore
                        [isLoading, recommendQuestion, recommendClick,];
                    } }, key: ((index)), ...{ class: ("recommendList-item") }, });
            (item);
        }
    }
    // @ts-ignore
    const __VLS_20 = {}
        .VanCellGroup;
    ({}.VanCellGroup);
    ({}.VanCellGroup);
    __VLS_components.VanCellGroup;
    __VLS_components.vanCellGroup;
    __VLS_components.VanCellGroup;
    __VLS_components.vanCellGroup;
    // @ts-ignore
    [VanCellGroup, VanCellGroup,];
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
    const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({}));
    const __VLS_25 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22));
    // @ts-ignore
    const __VLS_26 = {}
        .VanField;
    ({}.VanField);
    ({}.VanField);
    __VLS_components.VanField;
    __VLS_components.vanField;
    __VLS_components.VanField;
    __VLS_components.vanField;
    // @ts-ignore
    [VanField, VanField,];
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ modelValue: ((__VLS_ctx.newQuestion)), center: (true), clearable: (true), placeholder: ("请输入您的想要问的新闻"), }));
    const __VLS_28 = __VLS_27({ modelValue: ((__VLS_ctx.newQuestion)), center: (true), clearable: (true), placeholder: ("请输入您的想要问的新闻"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ modelValue: ((__VLS_ctx.newQuestion)), center: (true), clearable: (true), placeholder: ("请输入您的想要问的新闻"), }));
    const __VLS_31 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { button: __VLS_thisSlot } = __VLS_nonNullable(__VLS_31.slots);
        if (!__VLS_ctx.isLoading) {
            // @ts-ignore
            const __VLS_32 = {}
                .VanButton;
            ({}.VanButton);
            ({}.VanButton);
            __VLS_components.VanButton;
            __VLS_components.vanButton;
            __VLS_components.VanButton;
            __VLS_components.vanButton;
            // @ts-ignore
            [VanButton, VanButton,];
            // @ts-ignore
            const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ ...{ 'onClick': {} }, size: ("small"), type: ("primary"), }));
            const __VLS_34 = __VLS_33({ ...{ 'onClick': {} }, size: ("small"), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
            ({}({ ...{ 'onClick': {} }, size: ("small"), type: ("primary"), }));
            let __VLS_38;
            const __VLS_39 = {
                onClick: (__VLS_ctx.submit)
            };
            const __VLS_37 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34));
            let __VLS_35;
            let __VLS_36;
            // @ts-ignore
            const __VLS_40 = {}
                .VanIcon;
            ({}.VanIcon);
            __VLS_components.VanIcon;
            __VLS_components.vanIcon;
            // @ts-ignore
            [VanIcon,];
            // @ts-ignore
            const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ name: ("guide-o"), size: ("1rem"), }));
            const __VLS_42 = __VLS_41({ name: ("guide-o"), size: ("1rem"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
            ({}({ name: ("guide-o"), size: ("1rem"), }));
            const __VLS_45 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42));
            // @ts-ignore
            [isLoading, newQuestion, submit,];
            __VLS_nonNullable(__VLS_37.slots).default;
        }
        else {
            // @ts-ignore
            const __VLS_46 = {}
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
            const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ vertical: (true), }));
            const __VLS_48 = __VLS_47({ vertical: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
            ({}({ vertical: (true), }));
            const __VLS_51 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { icon: __VLS_thisSlot } = __VLS_nonNullable(__VLS_51.slots);
                // @ts-ignore
                const __VLS_52 = {}
                    .VanIcon;
                ({}.VanIcon);
                __VLS_components.VanIcon;
                __VLS_components.vanIcon;
                // @ts-ignore
                [VanIcon,];
                // @ts-ignore
                const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({ name: ("weapp-nav"), size: ("1rem"), }));
                const __VLS_54 = __VLS_53({ name: ("weapp-nav"), size: ("1rem"), }, ...__VLS_functionalComponentArgsRest(__VLS_53));
                ({}({ name: ("weapp-nav"), size: ("1rem"), }));
                const __VLS_57 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54));
            }
        }
    }
    __VLS_nonNullable(__VLS_25.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['bg-gradient-to-b'];
        __VLS_styleScopedClasses['from-pink-300'];
        __VLS_styleScopedClasses['to-white-200'];
        __VLS_styleScopedClasses['container-greet'];
        __VLS_styleScopedClasses['dialogue'];
        __VLS_styleScopedClasses['dialogue-question'];
        __VLS_styleScopedClasses['dialogue-answer__isRaw'];
        __VLS_styleScopedClasses['dialogue-answer__notRaw'];
        __VLS_styleScopedClasses['dialogue-answer__notRaw-content'];
        __VLS_styleScopedClasses['image'];
        __VLS_styleScopedClasses['inputAndRecommend'];
        __VLS_styleScopedClasses['recommendList'];
        __VLS_styleScopedClasses['recommendList-item'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                back: back,
                newQuestion: newQuestion,
                messages: messages,
                isLoading: isLoading,
                recommendQuestion: recommendQuestion,
                submit: submit,
                recommendClick: recommendClick,
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
