<template>
  <div class="list-product">
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nama</th>
          <th scope="col">Image URL</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Category</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <ProductList
          v-for="product in products" :key="product.id"
          :product="product"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue'
export default {
  name: 'ProductDashboard',
  components: {
    ProductList
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

</style>
