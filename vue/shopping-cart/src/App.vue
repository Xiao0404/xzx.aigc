<template>
  <div id="app"> 
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Product</h2>
    <ProductList />
    <hr>
    <ShoppingCart />
  </div>
</template>

<script setup>

// import { computed } from 'vue';
// import { useStore } from 'vuex';


// const store = useStore(); // hooks 函数 
// // 依赖的vuex 状态发生改变时，

// // 使用 Vuex store 中的状态
// // 使用 computed 计算属性来获取 count 状态  , pinia 中可以直接使用 toRefs 获取状态

// const products = computed(() => store.state.products.all);
//  console.log(products);
//  // commit  mutation  dispatch  派出一个 action 
//  store.dispatch('products/getAllProducts');

import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart.vue';

 
</script>

<style lang="scss" scoped>

</style>