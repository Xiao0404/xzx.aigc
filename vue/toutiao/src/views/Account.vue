<template>
    <div class="main bg-gradient-to-b from-pink-300 to-white-200">
        <div class="account-container">
            <!-- 头像上传 -->
            <van-uploader v-model="avatarUrl" class="avatar-uploader" :show-upload="true" ref="uploader"
                max-count="1" />

            <!-- 信息编辑 -->
            <div class="info-section">
                <van-field v-model="username" label="用户名" placeholder="请输入用户名" required />

                <van-field v-model="email" label="邮箱" placeholder="请输入邮箱" type="email" />

                <!-- 性别选择器 -->
                <van-field v-model="fieldValue" is-link readonly label="性别" placeholder="选择性别"
                    @click="showPicker = true" />
                <van-popup v-model:show="showPicker" round position="bottom">
                    <van-picker :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
                </van-popup>

                <!-- 喜好选择 -->
                <van-field readonly label="喜好" :value="preferencesText" is-link @click="showPreferencesPopup = true" />
                <van-popup v-model:show="showPreferencesPopup" position="bottom">
                    <div class="preferences-popup">
                        <van-checkbox-group v-model="selectedPreferences">
                            <van-checkbox name="科技">科技</van-checkbox>
                            <van-checkbox name="体育">体育</van-checkbox>
                            <van-checkbox name="娱乐">娱乐</van-checkbox>
                            <van-checkbox name="财经">财经</van-checkbox>
                            <van-checkbox name="政治">政治</van-checkbox>
                        </van-checkbox-group>
                        <van-button type="primary" @click="handlePreferencesConfirm">确定</van-button>
                    </div>
                </van-popup>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';
import { Uploader, Field, Popup, Picker, Checkbox, CheckboxGroup, Button } from 'vant';

// 初始化数据
const avatarUrl = ref(
    JSON.parse(localStorage.getItem('avatarUrl') || '["https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg"]')
);
const username = ref<string>(localStorage.getItem('username') || '');
const email = ref<string>(localStorage.getItem('email') || '');
const fieldValue = ref<string>(localStorage.getItem('fieldValue') || '');
const preferencesText = ref<string>(localStorage.getItem('preferencesText') || '点击选择喜好');
const selectedPreferences = ref<string[]>(
    JSON.parse(localStorage.getItem('selectedPreferences') || '[]')
);

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
</script>

<style scoped>
.account-container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}

.avatar-section {
    width: 100px;
    height: 100px;
    margin-bottom: 1rem;
    cursor: pointer;
}

.avatar-uploader {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.info-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.preferences-popup {
    padding: 1rem;
}

@media (min-width: 768px) {
    .account-container {
        max-width: 500px;
        margin: 0 auto;
    }
}
</style>