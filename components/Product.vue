<template>

  <div class="w-full h-auto p-10 flex justify-center flex flex-wrap content-center ">
     <div v-for="product in products" :key="product.id" class="w-64 border p-2 shadow-lg rounded-xl m-5" style="height: 300px">
        <div @click="showProduct(product.id)" class="cursor-pointer">
          <div class="flex justify-center mb-2 mt-2">
              <img class="h-32 rounded-lg bg-gray-300" :src="product.img" alt="product1">
          </div>
          <h3 class="text-center text-2xl text-blue-900 font-bold">{{product.productName}}</h3>
          <p class="text-center text-lg font-bold">${{product.price}}</p>
        </div>
        <button @click="addToCart(product)" class="mb-2 mt-5 ml-14 bg-green-200 px-6 py-1 rounded hover:bg-green-500">Add to cart</button>
     </div>
  </div>

</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "Product",
  computed: {
    ...mapGetters(['products'])
  },
  methods: {
    addToCart(product){
      this.$store.dispatch('addToCart', {
        product: product,
        quantity: 1
      })
    },
    showProduct(id){
      console.log(id);
    }
  },  
}
</script>

<style>

</style>