<template>
  <div class="product">
    <Carousel/>
    <div class="categories">
      <ul class="list-group">
        <CategoriesList
          v-for="category in categories" :key="category.id"
          :category="category"
        />
      </ul>
  </div>
    <div class="container">
      <div class="row">
        <ProductsPage
          v-for="product in products" :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../axios/axiosinstance.js'
import Carousel from '@/components/Carousel.vue'
import ProductsPage from '@/components/ProductsPage.vue'
import CategoriesList from '@/components/CategoriesList.vue'

export default {
  name: 'Product',
  data () {
    return {
      categories: [],
      category: ''
    }
  },
  components: {
    Carousel,
    ProductsPage,
    CategoriesList
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    fetchCategories () {
      axios
        .get('/categories')
        .then(({ data }) => {
          this.categories = data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  computed: {
    products () {
      return this.$store.state.products
      // return this.$store.getters.categoryFilter(this.category)
    }
  },
  created () {
    this.fetchProducts()
    this.fetchCategories()
  }
}
</script>

<style scoped>
  @media (min-width: 1655px) {
    .categories{
      position: fixed;
      width: 300px;
      padding: 20px;
    }
  }
</style>
