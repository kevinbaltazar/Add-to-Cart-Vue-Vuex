<template>
  <div>
      <div>
          <h3 class="">Total Price: <span class="text-lg text-red-500">${{cartTotalPrice}}</span></h3>
      </div>
        <div class="w-full mt-5 p-5 shadow-md flex flex-row" v-for="item in cart" :key="item.id">
            <div class="">
                <img class="w-36" :src="item.product.product.img" alt="sd">
            </div>
            <div class="">
                <div class="">
                    <span class="text-2xl">{{item.product.product.productName}}  <span class="text-lg text-red-500">${{item.product.product.price}}</span> </span>
                </div>
                <div>
                    <i class="text-gray-500">Desciption</i>
                    <p>
                        {{item.product.product.description}}
                    </p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {

    computed: {
        ...mapGetters(['cart','cartTotalPrice'])
    }
}
</script>

<style>

</style>