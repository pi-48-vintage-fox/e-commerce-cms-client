<template>
  <section id="home">
    <Navbar></Navbar>
    <div class="container">
      <h1 class="text-left my-2">Product List</h1>
      <ProductCard v-for="product in $store.state.products" :key="product.id" :product="product"></ProductCard>
    </div>
  </section>
</template>

<script>
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
export default {
  name: 'Home',
  components: {
    Navbar,
    ProductCard
  },
  created () {
    this.$store.dispatch('getProduct')
  }
}
</script>
