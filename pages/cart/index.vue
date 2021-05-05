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
                <img class="w-36" :src="item.product.product.img" alt="sd">
            </div>
            <div class="">
                <div class="">
                    <span class="text-2xl">{{ item.product.quantity }} x {{item.product.product.productName}}  <span class="text-lg text-red-500">${{item.product.product.price}}</span> </span>
                </div>
                <div>
                    <i class="text-gray-500">Desciption</i>
                    <p>
                        {{item.product.product.description}}
                    </p>
                </div>
            </div>
            <div class="absolute right-32 flex flex-row space-x-5 -mt-1 ">
                <button @click="cartItemQuantity(1,item.product.product.id)" class="text-7xl right-10 focus:outline-none">+</button>
                <button @click="cartItemQuantity(-1,item.product.product.id)" class="text-8xl right-10 -mt-3 focus:outline-none">-</button>
            </div>
            <div class="absolute right-10 mt-4">
                <button @click="removeItemFromCart(item.product.product.id)" class="text-white bg-red-400 p-2 rounded-lg hover:bg-red-700 focus:outline-none">Remove</button>
            </div>
        </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters(['cart','cartTotalPrice'])
    },
    methods: {
        removeItemFromCart(id){
            this.$store.dispatch('removeItemInCart', id)
        },
        removeAllCart(){
            this.$store.dispatch('removeAllItemInCart')
        },
        toggleClose(toggle){
            this.quantityToggle = toggle
        },
        cartItemQuantity(value,id){
            this.$store.dispatch('itemQuantity',{value,id})
        }
    }
}
</script>

<style>

</style>