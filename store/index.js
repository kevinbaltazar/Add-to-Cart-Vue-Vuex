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
        state.cart.push(payload);
    }
}

export const actions = {
    async getProduct({commit}){
        const result = await axios.get(baseURL)
        commit('SET_PRODUCT', result.data)
    },
    addToCart({commit}, product,quantity){
        commit('ADD_CART', {product,quantity})
    }
}

export const getters = {
    products: (state) => state.product,
    cart: (state) => state.cart,
    length: (state) => state.cart.length,
    cartTotalPrice: (state) => {
        let total = 0;
        state.cart.forEach(element => {
            total += element.product.product.price
        });
        return total;
    }
}