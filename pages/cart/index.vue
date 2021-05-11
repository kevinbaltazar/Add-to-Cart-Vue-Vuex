<template>
    <div>
        <div>
            <h3 class="text-center text-2xl">Total Price: <span class="text-red-500 text-2xl">${{cartTotalPrice}}</span></h3>
        </div>
        <div>
          <button v-show="cart.length != 0" @click="removeAllCart()" class="absolute right-10 top-5 p-3 bg-red-700 text-white rounded-lg">Remove All!</button>
        </div>
        <div v-show="cart.length == 0">
            <span class="">
                <i>No item in cart...</i>
            </span>
        </div>
        <div class="w-full mt-5 p-5 shadow-md flex flex-row" v-for="item in cart" :key="item.id">
            <div class="">
                <img class="w-36 rounded-lg" :src="item.product.img" alt="NO PICTURE">
            </div>
            <div class="ml-6">
                <div class="">
                    <span class="text-2xl">{{ item.quantity }} x {{item.product.productName}}  <span class="text-lg text-red-500">${{item.product.price}}</span> </span>
                </div>
                <div>
                    <i class="text-gray-500">Desciption</i>
                    <p>
                        {{item.product.description}}
                    </p>
                </div>
            </div>
            <div class="absolute right-32 flex flex-row space-x-5 -mt-1 ">
                <button @click="itemQuantity({ id: item.product.id, quantity: 1 })" class="text-7xl right-10 focus:outline-none">+</button>
                <button @click="itemQuantity({ id: item.product.id, quantity: -1 })" class="text-8xl right-10 -mt-3 focus:outline-none">-</button>
            </div>
            <div class="absolute right-10 mt-4">
                <button @click="removeItemInCart({id: item.product.id})" class="text-white bg-red-400 p-2 rounded-lg hover:bg-red-700 focus:outline-none">Remove</button>
            </div>
        </div> 
  </div>
</template>

<script>
import {mapGetters, mapState, mapActions} from 'vuex'
export default {
    computed: {
        ...mapState(['cart']),
        ...mapGetters(['cartTotalPrice'])
    },
    methods: {
        // removeItemFromCart(id){
        //     this.$store.dispatch('removeItemInCart', id)
        // },
        removeAllCart(){
            this.$store.dispatch('removeAllItemInCart')
        },
        toggleClose(toggle){
            this.quantityToggle = toggle
        },
        // cartItemQuantity(value,id){
        //     this.$store.dispatch('itemQuantity',{value,id})
        // },
        ...mapActions(['removeItemInCart']),
        ...mapActions(['itemQuantity'])
    }
}
</script>

<style>

</style>