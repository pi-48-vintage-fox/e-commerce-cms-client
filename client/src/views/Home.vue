<template>
  <div class="home">
    <Navbar />
    <div class="container mt-2 bg-white" style="max-height: 500px; overflow: auto;">
      <h1>Product List</h1>
      <table class="table table-striped table-light">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <ProductList v-for="product in $store.state.products" :key="product.id" :product="product"/>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    ProductList
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>
