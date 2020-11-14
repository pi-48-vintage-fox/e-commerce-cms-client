<template>
  <div class="home">
    <Navbar/>

    <div class="container-fluid mt-5">
      <h1>List Product</h1>
      <hr>
      <div class="text-nowrap bd-highlight font-italic" style="width: 8rem;">
        Only admin can access all features.
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Fitur</th>
          </tr>
        </thead>
        <tbody>
        <ProductCard
        v-for="product in $store.state.products"
        :key="product.id"
        :product="product"/>
        </tbody>
      </table>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '@/components/ProductCard.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    ProductCard, Navbar, Footer
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style scoped>
  h1{
    font-family: 'Big Shoulders Inline Display', cursive;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 3rem;
  }
  .container-fluid{
    width: 70rem;
  }
  th{
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.2rem;
    color: white;
    background-color: #1e272e;
  }

</style>>
