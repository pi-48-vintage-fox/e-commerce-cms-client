<template>
<div>
  <Navbar/>
  <div class="container col-10" style="background-color: #eff1ee; opacity: 0.8;">
    <div id="products">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        <ProductBody v-for="product in $store.state.products" :key="product.id" :product="product"></ProductBody>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import ProductBody from '@/components/product.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Products',
  components: {
    ProductBody,
    Navbar
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>
