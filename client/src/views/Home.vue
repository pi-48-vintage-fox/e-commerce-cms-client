<template>
  <div class="home">
    <NavBar></NavBar>
    <div class="container">
      <div class="row">
        <Card v-for="(product) in products" :key="product.id" :product="product" :fetchProducts="fetchProducts"></Card>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import Card from '../components/Card'
export default {
  name: 'Home',
  data () {
    return {
      message: 'helo ini home'
    }
  },
  components: {
    NavBar,
    Card
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>
<style>
.container-card {
  margin-top: 120px
}
</style>
