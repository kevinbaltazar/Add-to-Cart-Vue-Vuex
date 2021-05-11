<template>
    <div class="w-full h-screen flex justify-center item-center -mt-6 p-20">
        <div class="relative shadow-lg w-full p-10">
            <button @click="addToCart(product)" class="absolute right-10 px-7 py-4 bg-green-400 rounded-lg focus:outline-none">Add to Cart</button>
            <h3 class="text-3xl">Specifications</h3>
            <div class="mt-5 flex flex-row">
                <img class="w-96 mr-5 rounded-lg" :src="product.img" alt="">
                <div class="flex flex-col">
                    <h3 class="text-3xl font-semibold mt-5">{{product.productName}}</h3>
                    <i>{{product.description}}</i>
                    <h1 class="text-6xl mt-5">${{product.price}}</h1>
                </div>
            </div>
            <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, numquam. Accusamus tenetur repellendus eum ipsa cumque impedit nihil enim natus suscipit consequuntur doloribus molestias, ea voluptates tempora incidunt error exercitationem, consequatur libero, quisquam animi veritatis maxime voluptatem? Quibusdam nobis id atque dicta illo enim debitis velit quae laboriosam. Aliquam, illum?</p>
            <br>
            <p>Lorem ipsum dolor sit ame laboriosam. Aliquam, illum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, laudantium. Laborum quia nam officia ab excepturi eveniet a dolore autem.</p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data(){
        return {
             product: [],
        }  
    },
    computed: {
        ...mapGetters([ 'getProduct' ]),
    },
    mounted() {
        this.product = this.getProduct(this.$route.params.id)
    },
    methods: {
        ...mapActions(['addToCart'])
    },
}
</script>

<style>

</style>