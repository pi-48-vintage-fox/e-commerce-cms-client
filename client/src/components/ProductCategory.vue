<template>
  <div>
      <Navbar/>
      <div class="container mt-2">
          <h1>list Product by Category</h1>
          {{ productCategory }}
          <h3>Category :</h3>
          <div class="row">
            <div class="col-3 mt-2">
                <div v-for="product in productCategory"
                :key="product.id">
                    <div class="card" v-for="inProduct in product.Products" :key="inProduct.id">
                        <img src="" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 v-for="inProduct in product.Products" :key="inProduct.id" class="card-title">{{ inProduct.name }}</h5>
                                <p v-for="inProduct in product.Products" :key="inProduct.id" class="card-text">Rp. {{ inProduct.price }},-</p>
                                <p class="card-text">Category : {{}}</p>
                                <a href="#" @click.prevent="updateProduct(dataProduct.id)">Edit</a>
                                ||
                                <a href="#" @click.prevent="deleteProduct(dataProduct.id)">Delete</a>
                            </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'ProductCategory',
  components: {
    Navbar
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
