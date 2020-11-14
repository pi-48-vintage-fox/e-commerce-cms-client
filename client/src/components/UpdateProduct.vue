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
                {{ productFilter }}
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
      data: {
        name: this.productFilter.price,
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
    },
    productFilter () {
      return this.$store.state.productById
    }
  },
  methods: {
    fetchProductById () {
      const idParams = Number(this.$route.params.id)
      this.$store.dispatch('fetchProductById', idParams)
    },
    fetchCategory () {
      this.$store.dispatch('fetchCategory')
    },
    updateProduct () {
      console.log(this.productFilter.name, 'dari product filter')
      console.log('masuk ke update')
      const dataProduct = {
        dataBarang: this.data,
        id: Number(this.$route.params.id)
      }
      this.$store.dispatch('updateProduct', dataProduct)
        .then(() => {
          this.$router.push('/')
        }).catch(err => {
          console.log(err.response)
        })
    }
  },
  created () {
    this.fetchProductById()
    this.fetchCategory()
    this.productFilter()
  }
}
</script>

<style>

</style>
