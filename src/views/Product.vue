<template>
  <div>
      <Navbar/>
      <ProductTable :products="products"/>
  </div>
</template>

<script>
import ProductTable from '../components/ProductTable'
import Navbar from '../components/Navbar'
export default {
    name: 'Product',
    components:{
        ProductTable,
        Navbar
    },
    computed:{
        products(){
            return this.$store.state.fetchProduct
        }
    },
    created(){
        this.$store.dispatch('fetchProduct')
    }
}
</script>

<style>

</style>