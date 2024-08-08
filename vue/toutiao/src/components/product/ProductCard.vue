<template>
    <div class="product-card">
      <img :src="card.img" :alt="card.title" class="card-image" v-lazy="card.img" />
      <div class="card-content">
        <h3 class="card-title ">{{ card.title }}</h3>
        <p class="card-description">{{ card.description }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
import { WaterFallCards } from '@/types/waterFallCards';

const props = defineProps<{
  card: WaterFallCards;
}>();
  </script>
  
  <style lang="less" scoped>
  .product-card {
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 3px 3px 3px #eee;
  border-radius: 10px;
  overflow: hidden;
  padding: 16px;
  box-sizing: border-box;
  
  .card-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 8px;
  }
  
  .card-content {
    .card-title {
      font-size: 1.2em;
      color: red;
      margin: 0 0 8px;
    }
    
    .card-description {
      font-size: 0.9em;
      color: #666;
    }
  }
}
  </style>
  