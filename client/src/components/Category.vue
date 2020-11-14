<template>
<div>
 <Navbar/>
  <div class="container mt-3">
      <h1>Category List</h1>
       <div class="overflow-auto" style="height: 600px">
     <table class="table table-striped mt-5">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
    <tbody v-for="category in categoryList"
    :key="category.id"
    >
      <tr>
        <th scope="row">{{ category.id }}</th>
        <td>{{ category.name }}</td>
        <button @click="viewProduct(category.id)" class="btn btn-secondary">View product</button>
      </tr>
    </tbody>
</table>
 </div>
  </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'Category',
  components: {
    Navbar
  },
  computed: {
    categoryList () {
      return this.$store.state.category
    }
  },
  methods: {
    fetchCategory () {
      this.$store.dispatch('fetchCategory')
    },
    viewProduct (id) {
      this.$store.dispatch('viewProductById', id)
      this.$router

        .push(`/productcategory/${id}`)
    }
  },
  created () {
    this.fetchCategory()
  }
}
</script>

<style>

</style>
