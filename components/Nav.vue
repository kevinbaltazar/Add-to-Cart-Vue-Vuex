<template>
  <div class="text-center mb-5 pt-5">
    <NuxtLink class="text-2xl mr-3" to="/">Home</NuxtLink> |
    <NuxtLink class="text-2xl ml-3" to="/cart">Cart<span>({{length}})</span> </NuxtLink>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters(['length'])
    },
}
</script>

<style>
a.nuxt-link-exact-active {
  color: #00c58e;
}
</style>