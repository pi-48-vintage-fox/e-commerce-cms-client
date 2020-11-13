<template>
  <div class="form-edit-product mt-5">
    <div class="col-4">
      <form @submit.prevent="editProduct">
        <div class="form-group">
          <input type="text" class="form-control" :value="product.name">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" :value="product.image_url">
        </div>
        <div class="form-group">
          <input type="number" class="form-control" :value="product.price">
        </div>
        <div class="form-group">
          <input type="number" class="form-control" :value="product.stock">
        </div>
        <div class="form-group">
          <select class="form-control" id="exampleFormControlSelect1">
            <option v-for="category in categories" :key="category.id"
            :value="category.id"
            :selected="category.id === product.CategoryId"
            >
            {{ category.name }}
            </option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditProduct',
  data () {
    return {
      updateProduct: {
        name: '',
        image_url: '',
        price: '',
        stock: '',
        CategoryId: ''
      }
    }
  },
  methods: {
    getProductById () {
      const id = this.$route.params.id
      this.$store.dispatch('getProductById', id)
    },
    fetchCategories () {
      this.$store.dispatch('fetchCategories')
    },
    editProduct () {
      const id = this.$route.params.id
      const updatedProduct = {
        name: this.updateProduct.name,
        image_url: this.updateProduct.image_url,
        price: this.updateProduct.price,
        stock: this.updateProduct.stock,
        CategoryId: this.updateProduct.CategoryId
      }

      this.$store.dispatch('editProduct', updatedProduct, id)
        .then(({ result }) => {
          this.$router.push({ name: 'ProductDashboard' })
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  computed: {
    product () {
      return this.$store.state.product
    },
    categories () {
      return this.$store.state.categories
    }
  },
  created () {
    this.getProductById()
    this.fetchCategories()
  }
}
</script>

<style>

</style>
