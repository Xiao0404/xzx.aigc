<template>
    <div class="score">
      <header class="your_score">
        <span class="score_name">{{ score }}分</span>
        <div class="result_tip">{{ scoreTip }}</div>
      </header>
    </div>
  </template>
  
  <script setup>
  import { useQuestionStore } from '@/store/question';
  import { storeToRefs } from 'pinia';
  import { computed, reactive } from 'vue';
  
  // 图片资源要当成资源引入
  // import pic from '../assets/images/4-1.jpg'
  
  const state1 = reactive({
    scoreTipsArr: [
      "你说，是不是把知识都还给小学老师了？",
      "还不错，但还需要继续加油哦！",
      "不要嘚瑟还有进步的空间！",
      "智商离爆表只差一步了！",
      "你也太聪明啦，旅梦欢迎你！",
    ]
  });
  
  const questionStore = useQuestionStore();
  const { state } = storeToRefs(questionStore);
  
  // 计算分数
  const score = computed(() => {
    let count = 0;
    const totalQuestions = state.value.questionList.length;
    const fullScore = 100;
    const scorePerQuestion = fullScore / totalQuestions;
  
    for (let i = 0; i < totalQuestions; i++) {
      const userAnswerIndex = state.value.answerList[i];
      const correctAnswer = state.value.questionList[i].topic_answer[userAnswerIndex]?.is_standard_answer;
  
      // 这里假设 correctAnswer 是布尔值，如果是数字 (0 或 1)，需要转换
      if (correctAnswer === 1) {
        count++;
      }
    }
  
    return scorePerQuestion * count;
  });
  
  // 根据分数获取提示
  const scoreTip = computed(() => {
    const scoreValue = score.value;
    if (scoreValue < 20) {
      return state1.scoreTipsArr[0];
    } else if (scoreValue < 40) {
      return state1.scoreTipsArr[1];
    } else if (scoreValue < 60) {
      return state1.scoreTipsArr[2];
    } else if (scoreValue < 80) {
      return state1.scoreTipsArr[3];
    } else {
      return state1.scoreTipsArr[4];
    }
  });
  </script>
  
  <style lang="less">
  .score {
    font-size: 40px;
  }
  </style>
  
  <style lang="css">
  /* 可以在一份vue文件上写多份css */
  body {
    background: url('@/assets/images/4-1.jpg');
  }
  </style>
  