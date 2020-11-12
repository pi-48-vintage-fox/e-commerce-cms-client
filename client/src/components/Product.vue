<template>
<div class="col-3 mt-2">
       <div class="card">
        <img :src="dataProduct.image_url" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ dataProduct.name }}</h5>
                <p class="card-text">{{ dataProduct.price }}</p>
                <p class="card-text">Category : {{ dataProduct.Category.name }}</p>
                <a href="#">Edit</a>
                ||
                <a href="#" @click.prevent="deleteProduct(dataProduct.id)">Delete</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      img: 'https://id-test-11.slatic.net/p/4aa61f8287ae9c1b867170b7d426f064.jpg_340x340q80.jpg_.webp'
    }
  },
  props: ['dataProduct'],
  methods: {
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    }
  }
}
</script>

<style>

</style>
