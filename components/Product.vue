<template>

  <div class="w-full h-auto p-10 flex justify-center flex flex-wrap content-center ">
     <div v-for="product in product" :key="product.id" class="w-64 border p-2 shadow-lg rounded-xl m-5" style="height: 300px">
        <NuxtLink :to="'/product/'+product.id">
        <div class="cursor-pointer">
          <div class="flex justify-center mb-2 mt-2">
              <img class="h-32 rounded-lg bg-gray-300" :src="product.img" alt="product1">
          </div>
          <h3 class="text-center text-2xl text-blue-900 font-bold">{{product.productName}}</h3>
          <p class="text-center text-lg font-bold">${{product.price}}</p>
        </div>
        </NuxtLink>
        <button @click="addToCart(product)" class="mb-2 mt-5 ml-14 bg-green-200 px-6 py-1 rounded hover:bg-green-500">Add to cart</button>
     </div>
  </div>

</template>

<script>
import {mapGetters, mapState, mapActions} from "vuex"

export default {
  name: "Product",
  computed: {
    ...mapState(['product'])
  },
  methods: {
    ...mapActions(['addToCart'])
  },  
}
</script>

<style>

</style>