<template>
    <div class="search-component" @click="handleClickOutside">
        <div class="search-box" @mouseover="isFocused = true">
            <input
                v-model="query"
                @keydown.enter="performSearch"
                @focus="isFocused = true"
                type="text"
                placeholder="Search..."
            />
            <i class="search-icon" @click="performSearch">🔍</i>
        </div>

        <!-- 搜索历史 -->
        <div v-if="isFocused && searchHistory.length" class="history-box">
            <div class="history-title">
                <span>搜索历史</span>
                <button @click="clearHistory">清除历史</button>
            </div>
            <ul>
                <li v-for="(item, index) in searchHistory" :key="index" @click="selectHistory(item)">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

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
</script>

<style scoped>
.search-component {
    position: relative;
    width: 100%; /* 使搜索框宽度占满 */
    margin: 0; /* 去掉外边距 */
    padding: 20px 0; /* 添加上下内边距以居中 */
}

.search-box {
    display: flex;
    align-items: center;
    background-color: white; /* 白色背景 */
    border-radius: 4px;
    padding: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.search-box input {
    flex-grow: 1;
    padding: 8px;
    border: none;
    outline: none;
    background-color: transparent; /* 透明背景 */
    color: blueviolet;
}

.search-icon {
    cursor: pointer;
    font-size: 18px;
    color: blueviolet; /* 修改为与输入框文字颜色一致 */
    margin-left: 8px;
}

.history-box {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    border: 1px solid #ddd;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    z-index: 10;
}

.history-title {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    font-size: 14px;
    background-color: #f6f6f6;
    border-bottom: 1px solid #ddd;
}

.history-box ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.history-box li {
    padding: 8px;
    cursor: pointer;
}

.history-box li:hover {
    background-color: #f0f0f0;
}
</style>
