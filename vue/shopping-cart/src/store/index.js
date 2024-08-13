import { createStore } from 'vuex';

// vuex 比 pinia 更复杂，中央仓库的概念  store  单例  单一状态树


import cart  from './modules/cart'
import products from './modules/products'

// 仓库 
// 分子仓
export default createStore({
    // 全局状态 简单  数据一多就麻烦了。
    state:{
        count:0
    },
    // 模块化
    modules: {
        cart, // 购物车状态
        products // 商品状态

    },
});

