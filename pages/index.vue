<template>
  <div class="w-full h-full">
    <div>
      <h3 class="text-center text-blue-900 text-5xl mt-6">Products</h3>
    </div>
    <Product />
  </div>
</template>

<script>
import {mapActions} from "vuex"

export default {
  mounted() {
    this.$store.dispatch('getProduct')
  }
}
</script>

<style>

</style>
