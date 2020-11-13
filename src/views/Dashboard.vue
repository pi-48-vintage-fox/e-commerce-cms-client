<template>
  <div class="home grid">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3">
        <TheSidebar :user="user" :categories="categories" />
      </vs-col>
      <vs-col id="main-view" vs-type="flex" vs-justify="center" vs-align="center" w="9">
        <router-view></router-view>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import TheSidebar from '../components/TheSidebar'

export default {
  name: 'Home',
  components: {
    TheSidebar
  },
  data () {
    return {
    }
  },
  created () {
    this.fetchUserDetails()
    this.fetchCategories()
    this.fetchProducts()
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    categories () {
      return this.$store.state.categories
    },
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    fetchUserDetails () {
      console.log('fetching user details')
      this.$store.dispatch('fetchUserDetails')
    },
    fetchCategories () {
      console.log('fetch categories')
      this.$store.dispatch('fetchCategories')
    },
    fetchProducts () {
      console.log('fetch products')
      this.$store.dispatch('fetchProducts')
    }
  }
}
</script>

<style >
  #main-view {
    height: 100vh;
    overflow-y: auto;
  }
</style>
