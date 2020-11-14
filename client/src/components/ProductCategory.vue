<template>
  <div>
      <Navbar/>
      <div class="container mt-2">
          <h1>list Product by Category</h1>
          {{ productCategory }}
          <h3>Category :</h3>
          <div v-for="product in productCategory"
          :key="product.id">
          <div class="row mt-5">
            <CardProductCategory/>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import CardProductCategory from '../components/CardProductCategory'
export default {
  name: 'ProductCategory',
  components: {
    Navbar, CardProductCategory
  },
  computed: {
    productCategory () {
      return this.$store.state.productCategory
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
