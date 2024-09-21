import { ref, watch } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// 初始化数据
const avatarUrl = ref(JSON.parse(localStorage.getItem('avatarUrl') || '["https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg"]'));
const username = ref(localStorage.getItem('username') || '');
const email = ref(localStorage.getItem('email') || '');
const fieldValue = ref(localStorage.getItem('fieldValue') || '');
const preferencesText = ref(localStorage.getItem('preferencesText') || '点击选择喜好');
const selectedPreferences = ref(JSON.parse(localStorage.getItem('selectedPreferences') || '[]'));
const showPicker = ref(false);
const showPreferencesPopup = ref(false);
const columns = [
    { text: '男', value: '男' },
    { text: '女', value: '女' }
];
// 更新localStorage的辅助函数
const updateLocalStorage = () => {
    localStorage.setItem('avatarUrl', JSON.stringify(avatarUrl.value));
    localStorage.setItem('username', username.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('fieldValue', fieldValue.value);
    localStorage.setItem('preferencesText', preferencesText.value);
    localStorage.setItem('selectedPreferences', JSON.stringify(selectedPreferences.value));
};
// 监听数据变化并更新localStorage
watch([avatarUrl, username, email, fieldValue, preferencesText, selectedPreferences], updateLocalStorage, { deep: true });
const onConfirm = ({ selectedOptions }) => {
    showPicker.value = false;
    fieldValue.value = selectedOptions[0].text;
};
const handlePreferencesConfirm = () => {
    preferencesText.value = selectedPreferences.value.join(', ');
    showPreferencesPopup.value = false;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("main bg-gradient-to-b from-pink-300 to-white-200") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("account-container") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .VanUploader;
    ({}.VanUploader);
    __VLS_components.VanUploader;
    __VLS_components.vanUploader;
    // @ts-ignore
    [VanUploader,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ modelValue: ((__VLS_ctx.avatarUrl)), ...{ class: ("avatar-uploader") }, showUpload: ((true)), ref: ("uploader"), maxCount: ("1"), }));
    const __VLS_2 = __VLS_1({ modelValue: ((__VLS_ctx.avatarUrl)), ...{ class: ("avatar-uploader") }, showUpload: ((true)), ref: ("uploader"), maxCount: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ modelValue: ((__VLS_ctx.avatarUrl)), ...{ class: ("avatar-uploader") }, showUpload: ((true)), ref: ("uploader"), maxCount: ("1"), }));
    // @ts-ignore
    (__VLS_ctx.uploader);
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    [avatarUrl, uploader,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("info-section") }, });
    // @ts-ignore
    const __VLS_6 = {}
        .VanField;
    ({}.VanField);
    __VLS_components.VanField;
    __VLS_components.vanField;
    // @ts-ignore
    [VanField,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ modelValue: ((__VLS_ctx.username)), label: ("用户名"), placeholder: ("请输入用户名"), required: (true), }));
    const __VLS_8 = __VLS_7({ modelValue: ((__VLS_ctx.username)), label: ("用户名"), placeholder: ("请输入用户名"), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ modelValue: ((__VLS_ctx.username)), label: ("用户名"), placeholder: ("请输入用户名"), required: (true), }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    // @ts-ignore
    [username,];
    // @ts-ignore
    const __VLS_12 = {}
        .VanField;
    ({}.VanField);
    __VLS_components.VanField;
    __VLS_components.vanField;
    // @ts-ignore
    [VanField,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ modelValue: ((__VLS_ctx.email)), label: ("邮箱"), placeholder: ("请输入邮箱"), type: ("email"), }));
    const __VLS_14 = __VLS_13({ modelValue: ((__VLS_ctx.email)), label: ("邮箱"), placeholder: ("请输入邮箱"), type: ("email"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ modelValue: ((__VLS_ctx.email)), label: ("邮箱"), placeholder: ("请输入邮箱"), type: ("email"), }));
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
    // @ts-ignore
    [email,];
    // @ts-ignore
    const __VLS_18 = {}
        .VanField;
    ({}.VanField);
    __VLS_components.VanField;
    __VLS_components.vanField;
    // @ts-ignore
    [VanField,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ 'onClick': {} }, modelValue: ((__VLS_ctx.fieldValue)), isLink: (true), readonly: (true), label: ("性别"), placeholder: ("选择性别"), }));
    const __VLS_20 = __VLS_19({ ...{ 'onClick': {} }, modelValue: ((__VLS_ctx.fieldValue)), isLink: (true), readonly: (true), label: ("性别"), placeholder: ("选择性别"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ ...{ 'onClick': {} }, modelValue: ((__VLS_ctx.fieldValue)), isLink: (true), readonly: (true), label: ("性别"), placeholder: ("选择性别"), }));
    let __VLS_24;
    const __VLS_25 = {
        onClick: (...[$event]) => {
            __VLS_ctx.showPicker = true;
            // @ts-ignore
            [fieldValue, showPicker,];
        }
    };
    const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
    let __VLS_21;
    let __VLS_22;
    // @ts-ignore
    const __VLS_26 = {}
        .VanPopup;
    ({}.VanPopup);
    ({}.VanPopup);
    __VLS_components.VanPopup;
    __VLS_components.vanPopup;
    __VLS_components.VanPopup;
    __VLS_components.vanPopup;
    // @ts-ignore
    [VanPopup, VanPopup,];
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ show: ((__VLS_ctx.showPicker)), round: (true), position: ("bottom"), }));
    const __VLS_28 = __VLS_27({ show: ((__VLS_ctx.showPicker)), round: (true), position: ("bottom"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ show: ((__VLS_ctx.showPicker)), round: (true), position: ("bottom"), }));
    const __VLS_31 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28));
    // @ts-ignore
    const __VLS_32 = {}
        .VanPicker;
    ({}.VanPicker);
    __VLS_components.VanPicker;
    __VLS_components.vanPicker;
    // @ts-ignore
    [VanPicker,];
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ ...{ 'onCancel': {} }, ...{ 'onConfirm': {} }, columns: ((__VLS_ctx.columns)), }));
    const __VLS_34 = __VLS_33({ ...{ 'onCancel': {} }, ...{ 'onConfirm': {} }, columns: ((__VLS_ctx.columns)), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ ...{ 'onCancel': {} }, ...{ 'onConfirm': {} }, columns: ((__VLS_ctx.columns)), }));
    let __VLS_38;
    const __VLS_39 = {
        onCancel: (...[$event]) => {
            __VLS_ctx.showPicker = false;
            // @ts-ignore
            [showPicker, showPicker, columns,];
        }
    };
    const __VLS_40 = {
        onConfirm: (__VLS_ctx.onConfirm)
    };
    const __VLS_37 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34));
    let __VLS_35;
    let __VLS_36;
    // @ts-ignore
    [onConfirm,];
    __VLS_nonNullable(__VLS_31.slots).default;
    // @ts-ignore
    const __VLS_41 = {}
        .VanField;
    ({}.VanField);
    __VLS_components.VanField;
    __VLS_components.vanField;
    // @ts-ignore
    [VanField,];
    // @ts-ignore
    const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ ...{ 'onClick': {} }, readonly: (true), label: ("喜好"), value: ((__VLS_ctx.preferencesText)), isLink: (true), }));
    const __VLS_43 = __VLS_42({ ...{ 'onClick': {} }, readonly: (true), label: ("喜好"), value: ((__VLS_ctx.preferencesText)), isLink: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
    ({}({ ...{ 'onClick': {} }, readonly: (true), label: ("喜好"), value: ((__VLS_ctx.preferencesText)), isLink: (true), }));
    let __VLS_47;
    const __VLS_48 = {
        onClick: (...[$event]) => {
            __VLS_ctx.showPreferencesPopup = true;
            // @ts-ignore
            [preferencesText, showPreferencesPopup,];
        }
    };
    const __VLS_46 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43));
    let __VLS_44;
    let __VLS_45;
    // @ts-ignore
    const __VLS_49 = {}
        .VanPopup;
    ({}.VanPopup);
    ({}.VanPopup);
    __VLS_components.VanPopup;
    __VLS_components.vanPopup;
    __VLS_components.VanPopup;
    __VLS_components.vanPopup;
    // @ts-ignore
    [VanPopup, VanPopup,];
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({ show: ((__VLS_ctx.showPreferencesPopup)), position: ("bottom"), }));
    const __VLS_51 = __VLS_50({ show: ((__VLS_ctx.showPreferencesPopup)), position: ("bottom"), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
    ({}({ show: ((__VLS_ctx.showPreferencesPopup)), position: ("bottom"), }));
    const __VLS_54 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_49, __VLS_51));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("preferences-popup") }, });
    // @ts-ignore
    const __VLS_55 = {}
        .VanCheckboxGroup;
    ({}.VanCheckboxGroup);
    ({}.VanCheckboxGroup);
    __VLS_components.VanCheckboxGroup;
    __VLS_components.vanCheckboxGroup;
    __VLS_components.VanCheckboxGroup;
    __VLS_components.vanCheckboxGroup;
    // @ts-ignore
    [VanCheckboxGroup, VanCheckboxGroup,];
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ modelValue: ((__VLS_ctx.selectedPreferences)), }));
    const __VLS_57 = __VLS_56({ modelValue: ((__VLS_ctx.selectedPreferences)), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
    ({}({ modelValue: ((__VLS_ctx.selectedPreferences)), }));
    const __VLS_60 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57));
    // @ts-ignore
    const __VLS_61 = {}
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
    const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ name: ("科技"), }));
    const __VLS_63 = __VLS_62({ name: ("科技"), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
    ({}({ name: ("科技"), }));
    const __VLS_66 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63));
    // @ts-ignore
    [showPreferencesPopup, selectedPreferences,];
    __VLS_nonNullable(__VLS_66.slots).default;
    // @ts-ignore
    const __VLS_67 = {}
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
    const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({ name: ("体育"), }));
    const __VLS_69 = __VLS_68({ name: ("体育"), }, ...__VLS_functionalComponentArgsRest(__VLS_68));
    ({}({ name: ("体育"), }));
    const __VLS_72 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_67, __VLS_69));
    __VLS_nonNullable(__VLS_72.slots).default;
    // @ts-ignore
    const __VLS_73 = {}
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
    const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({ name: ("娱乐"), }));
    const __VLS_75 = __VLS_74({ name: ("娱乐"), }, ...__VLS_functionalComponentArgsRest(__VLS_74));
    ({}({ name: ("娱乐"), }));
    const __VLS_78 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_73, __VLS_75));
    __VLS_nonNullable(__VLS_78.slots).default;
    // @ts-ignore
    const __VLS_79 = {}
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
    const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({ name: ("财经"), }));
    const __VLS_81 = __VLS_80({ name: ("财经"), }, ...__VLS_functionalComponentArgsRest(__VLS_80));
    ({}({ name: ("财经"), }));
    const __VLS_84 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_79, __VLS_81));
    __VLS_nonNullable(__VLS_84.slots).default;
    // @ts-ignore
    const __VLS_85 = {}
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
    const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({ name: ("政治"), }));
    const __VLS_87 = __VLS_86({ name: ("政治"), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
    ({}({ name: ("政治"), }));
    const __VLS_90 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87));
    __VLS_nonNullable(__VLS_90.slots).default;
    __VLS_nonNullable(__VLS_60.slots).default;
    // @ts-ignore
    const __VLS_91 = {}
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
    const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({ ...{ 'onClick': {} }, type: ("primary"), }));
    const __VLS_93 = __VLS_92({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_92));
    ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
    let __VLS_97;
    const __VLS_98 = {
        onClick: (__VLS_ctx.handlePreferencesConfirm)
    };
    const __VLS_96 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_91, __VLS_93));
    let __VLS_94;
    let __VLS_95;
    // @ts-ignore
    [handlePreferencesConfirm,];
    __VLS_nonNullable(__VLS_96.slots).default;
    __VLS_nonNullable(__VLS_54.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['main'];
        __VLS_styleScopedClasses['bg-gradient-to-b'];
        __VLS_styleScopedClasses['from-pink-300'];
        __VLS_styleScopedClasses['to-white-200'];
        __VLS_styleScopedClasses['account-container'];
        __VLS_styleScopedClasses['avatar-uploader'];
        __VLS_styleScopedClasses['info-section'];
        __VLS_styleScopedClasses['preferences-popup'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                avatarUrl: avatarUrl,
                username: username,
                email: email,
                fieldValue: fieldValue,
                preferencesText: preferencesText,
                selectedPreferences: selectedPreferences,
                showPicker: showPicker,
                showPreferencesPopup: showPreferencesPopup,
                columns: columns,
                onConfirm: onConfirm,
                handlePreferencesConfirm: handlePreferencesConfirm,
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
