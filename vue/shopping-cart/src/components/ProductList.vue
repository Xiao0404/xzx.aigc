<template>
    <ul>
        <li v-for="product in products " :key="product.id" >
            {{ product.title }} - {{ product.price }}
            <br>
            <button 
                @click="addProductToCart(product)" 
                :disabled="!product.inventory"
            >
                Add to Cart
            </button>

        </li>
    </ul>
</template>

<script setup>
    import { computed ,onMounted } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore(); // hooks 函数

    const products = computed(() => store.state.products.all);

    onMounted(() => {
        store.dispatch('products/getAllProducts');
    });

    const addProductToCart = (product) => {
        // 修改  dispatch action  ->  commit  mutation  触发 
        //  共享 +  数据状态的正确性  
        // inventory - 1  
        // cart + 1 
        store.dispatch('cart/addProductToCart', product);
        // store.dispatch('products/decrementProductInventory', product);

    }




</script>

<style lang="sass" scoped>

</style>