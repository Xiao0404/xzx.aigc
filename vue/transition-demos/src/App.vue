<script setup>
  import {ref} from 'vue';
  // import {} from '';
  const name = '旅梦开发团';
  const isActive = ref(true);
   
</script>

<template>
  <div class="page">
      <div class="card">
        <div class="card__header">
          <h3 class="card-title">{{ name }}</h3>
          <div class="card-subtitle">Transition & Animation</div>
        </div>
        <div class="card__content">
          <!-- <div :class="['emoji',{pulse: !isActive}]">🌲</div> -->
          <!-- <transition name="pulse" >
              <div v-if="isActive" class="emoji">🥹</div>
          </transition> -->
          <transition class="animate__tada"
            enter-active-class="animate__animated animate__tada"
            leave-active-class="animate__animated animate__bounce"
          >
          <div v-if="isActive" class="emoji">🥹</div>
          </transition>
        </div>
        <div class="card__action">
            <button type="button" @click="isActive =!isActive;">请按这里</button>
        </div>
      </div>
  </div>
 
</template>

<style scoped>
 /* 全局样式 */
  @import './styles/app.css'; 
  @import './styles/animation.css';
  @import './styles/card.css';
</style>
