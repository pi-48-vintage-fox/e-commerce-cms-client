<template>
  <div class="about">
    <h1>E-Commerce CMS</h1>
    <div class="container">
      <div class="row">
        <ProductsPage
          v-for="product in products" :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../axios/axiosinstance.js'
import ProductsPage from '@/components/ProductsPage.vue'

export default {
  name: 'Product',
  data () {
    return {
      products: []
    }
  },
  components: {
    ProductsPage
  },
  methods: {
    fetchProducts () {
      axios
        .get('/products')
        .then(({ data }) => {
          this.products = data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style scoped>

</style>
