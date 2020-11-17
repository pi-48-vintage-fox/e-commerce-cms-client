<template>
  <div>
      <Navbar/>
      <h1 class="mt-5">Update Product</h1>
      <div class="container mt-2 text-center">
          <div class="row justify-content-center">
              <div class="col-6">
                <form v-on:submit.prevent="updateProduct">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input v-model="name" type="text" class="form-control" id="name">
                </div>
                <div class="form-group">
                    <label for="image_url">Image Url</label>
                    <input v-model="image_url" type="text" class="form-control" id="image_url">
                </div>
                <div class="form-group">
                    <label for="price">Price</label>
                    <input v-model="price" type="number" class="form-control" id="price">
                </div>
                <div class="form-group">
                    <label for="stock">Stock</label>
                    <input v-model="stock" type="number" class="form-control" id="stock">
                </div>
                <div class="form-group">
                    <label for="category">Category</label>
                    <select v-model="CategoryId" class="form-control" id="category">
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
  name: 'UpdateProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: '',
      CategoryId: ''
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
    updateProduct () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
        CategoryId: this.CategoryId,
        idParams: +this.$route.params.id
      }
      this.$store.dispatch('updateProduct', payload)
        .then(() => {
          this.$router.push('/')
          this.$store.dispatch('fetchProduct')
        }).catch(err => {
          console.log(err.response)
        })
    }
  },
  created () {
    this.fetchCategory()
    const idParams = this.$route.params.id
    this.$store.dispatch('fetchProductById', idParams)
      .then(({ data }) => {
        this.name = data.name
        this.image_url = data.image_url
        this.price = data.price
        this.stock = data.stock
        this.CategoryId = data.CategoryId
      })
  }
}
</script>

<style>

</style>
