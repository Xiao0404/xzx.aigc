import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const params = reactive({
    username: '',
    password: ''
});
const checked = ref(false);
const router = useRouter();
const onSubmit = () => {
    console.log(params);
};
const toRegister = () => {
    router.push('/register');
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-screen h-screen") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .VanNavBar;
    ({}.VanNavBar);
    ({}.VanNavBar);
    __VLS_components.VanNavBar;
    __VLS_components.vanNavBar;
    __VLS_components.VanNavBar;
    __VLS_components.vanNavBar;
    // @ts-ignore
    [VanNavBar, VanNavBar,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ leftArrow: (true), }));
    const __VLS_2 = __VLS_1({ leftArrow: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ leftArrow: (true), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { right: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-cs text-gray-400") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-xl font-bold text-center my-10") }, });
    // @ts-ignore
    const __VLS_6 = {}
        .VanForm;
    ({}.VanForm);
    ({}.VanForm);
    __VLS_components.VanForm;
    __VLS_components.vanForm;
    __VLS_components.VanForm;
    __VLS_components.vanForm;
    // @ts-ignore
    [VanForm, VanForm,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onSubmit': {} }, model: ("params"), }));
    const __VLS_8 = __VLS_7({ ...{ 'onSubmit': {} }, model: ("params"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ 'onSubmit': {} }, model: ("params"), }));
    let __VLS_12;
    const __VLS_13 = {
        onSubmit: (__VLS_ctx.onSubmit)
    };
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    let __VLS_9;
    let __VLS_10;
    // @ts-ignore
    const __VLS_14 = {}
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
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ inset: (true), }));
    const __VLS_16 = __VLS_15({ inset: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({ inset: (true), }));
    const __VLS_19 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16));
    // @ts-ignore
    const __VLS_20 = {}
        .VanField;
    ({}.VanField);
    __VLS_components.VanField;
    __VLS_components.vanField;
    // @ts-ignore
    [VanField,];
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ modelValue: ((__VLS_ctx.params.username)), name: ("用户名"), label: ("用户名"), placeholder: ("请输入用户名"), rules: (([{ required: true, message: '请输入用户名' }])), }));
    const __VLS_22 = __VLS_21({ modelValue: ((__VLS_ctx.params.username)), name: ("用户名"), label: ("用户名"), placeholder: ("请输入用户名"), rules: (([{ required: true, message: '请输入用户名' }])), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({ modelValue: ((__VLS_ctx.params.username)), name: ("用户名"), label: ("用户名"), placeholder: ("请输入用户名"), rules: (([{ required: true, message: '请输入用户名' }])), }));
    const __VLS_25 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22));
    // @ts-ignore
    [onSubmit, params,];
    // @ts-ignore
    const __VLS_26 = {}
        .VanField;
    ({}.VanField);
    __VLS_components.VanField;
    __VLS_components.vanField;
    // @ts-ignore
    [VanField,];
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ modelValue: ((__VLS_ctx.params.password)), name: ("密码"), label: ("密码"), placeholder: ("请输入密码"), type: ("password"), rules: (([{ required: true, message: '请输入密码' }])), }));
    const __VLS_28 = __VLS_27({ modelValue: ((__VLS_ctx.params.password)), name: ("密码"), label: ("密码"), placeholder: ("请输入密码"), type: ("password"), rules: (([{ required: true, message: '请输入密码' }])), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ modelValue: ((__VLS_ctx.params.password)), name: ("密码"), label: ("密码"), placeholder: ("请输入密码"), type: ("password"), rules: (([{ required: true, message: '请输入密码' }])), }));
    const __VLS_31 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28));
    // @ts-ignore
    [params,];
    __VLS_nonNullable(__VLS_19.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
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
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ block: (true), color: ("#d2d2d2"), nativeType: ("submit"), }));
    const __VLS_34 = __VLS_33({ block: (true), color: ("#d2d2d2"), nativeType: ("submit"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ block: (true), color: ("#d2d2d2"), nativeType: ("submit"), }));
    const __VLS_37 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34));
    __VLS_nonNullable(__VLS_37.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.toRegister) }, ...{ class: ("text-center") }, });
    // @ts-ignore
    [toRegister,];
    if (!__VLS_ctx.checked) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-ms ml-4 text-[#e6723c]") }, });
        // @ts-ignore
        [checked,];
    }
    // @ts-ignore
    const __VLS_38 = {}
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
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ name: ("checkbox"), }));
    const __VLS_40 = __VLS_39({ name: ("checkbox"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    ({}({ name: ("checkbox"), }));
    const __VLS_43 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { input: __VLS_thisSlot } = __VLS_nonNullable(__VLS_43.slots);
        // @ts-ignore
        const __VLS_44 = {}
            .VanCheckbox;
        ({}.VanCheckbox);
        ({}.VanCheckbox);
        __VLS_components.VanCheckbox;
        __VLS_components.vanCheckbox;
        __VLS_components.VanCheckbox;
        __VLS_components.vanCheckbox;
        // @ts-ignore
        [VanCheckbox, VanCheckbox,];
        // @ts-ignore
        const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ modelValue: ((__VLS_ctx.checked)), shape: ("square"), }));
        const __VLS_46 = __VLS_45({ modelValue: ((__VLS_ctx.checked)), shape: ("square"), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
        ({}({ modelValue: ((__VLS_ctx.checked)), shape: ("square"), }));
        const __VLS_49 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-x ml-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
        // @ts-ignore
        [checked,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
        __VLS_nonNullable(__VLS_49.slots).default;
    }
    __VLS_nonNullable(__VLS_11.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['w-screen'];
        __VLS_styleScopedClasses['h-screen'];
        __VLS_styleScopedClasses['text-cs'];
        __VLS_styleScopedClasses['text-gray-400'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['my-10'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-ms'];
        __VLS_styleScopedClasses['ml-4'];
        __VLS_styleScopedClasses['text-[#e6723c]'];
        __VLS_styleScopedClasses['text-x'];
        __VLS_styleScopedClasses['ml-2'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                params: params,
                checked: checked,
                onSubmit: onSubmit,
                toRegister: toRegister,
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
