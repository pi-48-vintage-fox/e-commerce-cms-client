<template>
  <div>
      <Navbar/>
      <h1 class="mt-5">Add Product</h1>
      <div class="container mt-2">
          <div class="row justify-content-center">
              <div class="col-6">
                <form v-on:submit.prevent="addProduct">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input v-model="data.name" type="text" class="form-control" id="name">
                </div>
                <div class="form-group">
                    <label for="image_url">Image Url</label>
                    <input v-model="data.image_url" type="text" class="form-control" id="image_url">
                </div>
                <div class="form-group">
                    <label for="price">Price</label>
                    <input v-model="data.price" type="number" class="form-control" id="price">
                </div>
                <div class="form-group">
                    <label for="stock">Stock</label>
                    <input v-model="data.stock" type="number" class="form-control" id="stock">
                </div>
                <div class="form-group">
                    <label for="category">Category</label>
                    <select v-model="data.CategoryId" class="form-control" id="category">
                    <option v-for="category in categoryList"
                    :key='category.id'
                    :value="category.id"
                    >{{ category.name }}</option>
                    </select>
                </div>
                <button class="btn btn-primary" type="submit">Submit</button>
                </form>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'AddProduct',
  data () {
    return {
      data: {
        name: '',
        image_url: '',
        price: '',
        stock: '',
        CategoryId: ''
      }
    }
  },
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
    addProduct () {
      const dataModel = this.data
      this.$store.dispatch('addProduct', dataModel)
        .then(() => {
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.fetchCategory()
  }
}
</script>

<style>

</style>
