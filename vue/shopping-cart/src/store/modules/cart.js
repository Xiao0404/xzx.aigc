const state = {
   items: []
}

const getters = {
    cartProducts:(state, getters, rootState) => {
        return state.items.map(({id, quantity}) => {
            const product = 
                rootState.products.all.find(product => product.id === id)
            return {
                id: product.id,
                title: product.title,
                price: product.price,
                quantity
            }
        })
    },
    cartTotalPrice:(state,getters) => {
        // 数组消灭   参数1 上一个的返回值 
        return getters.cartProducts.reduce((total, product) => {
            return total + product.price * product.quantity
        }, 0)

    }
}

const actions = {
         addProductToCart({ commit, state } ,product){
                if(product.inventory > 0){
                    
                    const cartItem = state.items.find(item =>item.id === product.id)
                    if(!cartItem){
                        // 新添加到购物车的
                        commit('pushProductToCart', {id: product.id })

                    }
                    else {
                        commit('incrementItemQuantity', cartItem)
                    }
                    commit('products/decrementProductInventory',{id: product.id},{root: true})
                }
     
        }
}

// 比 pinia 复杂的地方
// 规定了数据怎么可以变化
// 财务 对数据的修改原则
const mutations = {
    pushProductToCart(state,{id}){
            state.items.push({
                id,
                quantity:1
            })
    },

    incrementItemQuantity(state, cartItem){
        cartItem.quantity++
    }

}

// store.cart.all
export default {
    namespaced: true, // 添加命名空间
    state,
    getters,
    actions,
    mutations
}

