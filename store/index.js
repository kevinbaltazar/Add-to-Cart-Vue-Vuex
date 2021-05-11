import axios from "axios";

const baseURL = "http://localhost:4000/products"

export const state = () => ({
    product: [],
    cart: []
})

export const mutations = {
    SET_PRODUCT(state,payload){
        state.product = payload
    },
    ADD_CART(state,payload){
        let productIncart = state.cart.find(item => {
            return item.product.id == payload.product.id
        }) 
        if(productIncart){
            productIncart.quantity += payload.quantity
            return
        }
        state.cart.push(payload)  
    },
    REMOVE_ITEM_INTO_CART(state,payload){
        state.cart = state.cart.filter(item => 
            item.product.id != payload.id
        )
    },
    SET_QUANTITY_ITEM_IN_CART(state,payload){
        let productIncart = state.cart.find(item => {
            return item.product.id == payload.id
        }) 
        if(productIncart.quantity == 1 && payload.quantity == -1){
            return
        }  
        else{
            productIncart.quantity += payload.quantity
        } 
    },
    REMOVE_ALL_ITEM_IN_CART(state){
        state.cart = []
    },
}

export const actions = {
    async getProduct({commit}){
        const result = await axios.get(baseURL)
        commit('SET_PRODUCT', result.data)
    },
    addToCart({commit}, product){
        const quantity = 1
        commit('ADD_CART', {product,quantity})
    },
    removeItemInCart({commit}, payload){
        commit('REMOVE_ITEM_INTO_CART', payload)
    },
    removeAllItemInCart({commit}){
        commit('REMOVE_ALL_ITEM_IN_CART')
    },
    itemQuantity({commit},payload){
        commit('SET_QUANTITY_ITEM_IN_CART', payload)
    }
}

export const getters = {
    length: (state) => state.cart.length,
    cartTotalPrice: (state) => {
        let total = 0;
        state.cart.forEach(item => {
            total += item.product.price * item.quantity
        });
        return total;
    },
    getProduct: (state) => {
        return (id) => {
            let product = state.product.find(item => {
                return item.id == id
            })
            return product           
        }
    }
}