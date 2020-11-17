<template>
<div class="container mt-5">
  <h1>list Product</h1>
  <div class="row mt-5">
      <Product
      v-for='dataProduct in $store.state.product'
      :key='dataProduct.id'
      :dataProduct='dataProduct'
      />
  </div>
</div>
</template>

<script>
import Product from '../components/Product.vue'
export default {
  name: 'Content',
  data () {
    return {
      img: 'https://id-test-11.slatic.net/p/4aa61f8287ae9c1b867170b7d426f064.jpg_340x340q80.jpg_.webp'
    }
  },
  components: {
    Product
  },
  computed: {
    products () {
      return this.$store.state.product
    }
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>

<style>

</style>
