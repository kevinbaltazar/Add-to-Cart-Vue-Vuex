<template>
  <div>
        <div>
            <h3 class="">Total Price: <span class="text-lg text-red-500">${{cartTotalPrice}}</span></h3>
        </div>
        <div>
          <button v-show="cart.length != 0" @click="removeAllCart()" class="absolute right-10 top-5 p-3 bg-red-700 text-white rounded-lg">Remove All!</button>
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
            <button @click="removeItemFromCart(item.product.product.id)" class="absolute right-10 bg-red-400 p-2 rounded-lg">Remove</button>
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
        }
    }
}
</script>

<style>

</style>