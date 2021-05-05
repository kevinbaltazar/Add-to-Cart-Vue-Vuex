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
            return item.product.product.id == payload.product.product.id
        }) 
        
        if(productIncart){
            productIncart.product.quantity += payload.product.quantity
            return
        }

        state.cart.push(payload)  
   
    },
    REMOVE_ITEM_INTO_CART(state,payload){
        state.cart = state.cart.filter(item => 
            item.product.product.id != payload
        )
    },
    REMOVE_ALL_ITEM_IN_CART(state){
        state.cart = []
    }
}

export const actions = {
    async getProduct({commit}){
        const result = await axios.get(baseURL)
        commit('SET_PRODUCT', result.data)
    },
    addToCart({commit}, product){
        commit('ADD_CART', {product})
    },
    removeItemInCart({commit}, id){
        commit('REMOVE_ITEM_INTO_CART', id)
    },
    removeAllItemInCart({commit}){
        commit('REMOVE_ALL_ITEM_IN_CART')
    }
}

export const getters = {
    products: (state) => state.product,
    cart: (state) => state.cart,
    length: (state) => state.cart.length,
    cartTotalPrice: (state) => {
        let total = 0;
        state.cart.forEach(element => {
            total += element.product.product.price * element.product.quantity
        });
        return total;
    }
    
}