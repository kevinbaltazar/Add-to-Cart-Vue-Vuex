import axios from "axios";

const baseURL = "http://localhost:4000/products"


export const state = () => ({
    product: []
})

export const mutations = {
    SET_PRODUCT(state,payload){
        state.product = payload
    }
}

export const actions = {

    async getProduct(payload){
        const result = await axios.get(baseURL)
        payload.commit('SET_PRODUCT', result.data)
    }

}

export const getters = {
    products: (state) => state.product 
}