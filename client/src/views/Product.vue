<template>
    <div>
      <Navbar/>
    <div class="top-table align-content-end table-area">
        <TableProduct :products="products"/>
    </div>
    </div>
</template>

<script>
import TableProduct from '../components/TableProduct'
import Navbar from '../components/Navbar.vue'
export default {
  name: 'Product',
  components: {
    TableProduct,
    Navbar
  },
  computed: {
    products () {
      return this.$store.state.fetchProduct
    }
  },
  created () {
    this.$store.dispatch('fetchProduct')
  }
}
</script>
