import API from '../../api/shop.js'

const state = {
    all: []
}

const getters = {}

const actions = {
    // api 请求 =》 提交mutation
    getAllProducts({commit}){
        // commit ? vuex 给 actions 可以 commit mutations 的API
        API.getProducts((products) =>{
            console.log(products);
            commit('setProducts', products) 
        })

    }
}

// 比 pinia 复杂的地方
// 规定了数据怎么可以变化
// 财务 对数据的修改原则
const mutations = {
    // vuex mutations  api 第一个参数是state
    // products 是传来的参数
    setProducts(state, products){
        state.all = products
    },

    decrementProductInventory(state, {id}){
        const product = state.all.find(product => product.id === id)
        console.log(product.title);
        
        product.inventory--
    }
}

// store.product.all
export default {
    namespaced: true, // 添加命名空间
    state,
    getters,
    actions,
    mutations
}

