<template>
  <div class="product">
    <Carousel/>
    <div class="categories mt-5">
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
import Carousel from '@/components/Carousel.vue'
import ProductsPage from '@/components/ProductsPage.vue'
import CategoriesList from '@/components/CategoriesList.vue'

export default {
  name: 'Product',
  data () {
    return {
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
      this.$store.dispatch('fetchCategories')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
      // return this.$store.getters.categoryFilter(this.category)
    },
    categories () {
      return this.$store.state.categories
    }
  },
  created () {
    this.fetchProducts()
    this.fetchCategories()
  }
}
</script>

<style scoped>
  .container {
    margin-top: -77px;
  }
  @media (min-width: 1655px) {
    .categories{
      position: fixed;
      width: 300px;
      padding: 20px;
    }
  }
</style>
