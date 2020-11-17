<template>
  <div class="container-fluid">
    <div class="row">
      <h1 class="display-1">Edit Product Form</h1>
        <div class="col-12">
          <form class="edit-product-form" @submit.prevent="editProduct">
            <div class="form-group">
              <label for="image_url">Image URL: </label>
              <input v-model="editProductPayload.image_url" type="text" class="form-control"/>
            </div>
            <div class="form-group">
              <label for="name" class="name">Name: </label>
              <input v-model="editProductPayload.name" type="text" class="form-control"/>
            </div>
            <div class="form-group">
              <label for="price" class="price">Price: </label>
              <input v-model="editProductPayload.price" type="number" class="form-control" min="0"/>
            </div>
            <div class="form-group">
              <label for="stock" class="stock">Stock: </label>
              <input v-model="editProductPayload.stock" type="number" class="form-control" min="0"/>
            </div>
            <div class="form-group">
              <label for="category">Category: </label>
              <select v-model="editProductPayload.CategoryId" name="category" class="form-control">
                <EditOptionValue
                  v-for="category in categories"
                  :key="category.id"
                  :category="category"
                  :CategoryId="editProductValue.CategoryId"
                />
              </select>
            </div>
            <button class="btn btn-primary" type="submit">Submit</button>
          </form>
        </div>
      </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import EditOptionValue from '../components/EditOptionValue'
export default {
  name: 'EditProductForm',
  data () {
    return {
      editProductPayload: {
        id: '',
        image_url: '',
        name: '',
        price: 0,
        stock: 0,
        CategoryId: ''
      }
    }
  },
  created () {
    this.editProductPayload.id = this.$route.params.id
    this.editProductPayload.image_url = this.editProductValue.image_url
    this.editProductPayload.name = this.editProductValue.name
    this.editProductPayload.price = this.editProductValue.price
    this.editProductPayload.stock = this.editProductValue.stock
    this.editProductPayload.CategoryId = this.editProductValue.CategoryId
  },
  computed: {
    editProductValue () {
      return this.$store.state.editProductValue
    },
    categories () {
      return this.$store.state.categories
    }
  },
  methods: {
    editProduct () {
      this.$store.dispatch('editProduct', this.editProductPayload)
        .then(() => {
          this.$router.push({ name: 'Main' })
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message + '!'
          })
        })
    }
  },
  components: {
    EditOptionValue
  }
}
</script>

<style scoped>
.container-fluid {
  display: flex;
  justify-content: center;
}

.row {
  display: flex;
  flex-direction: column;
}
</style>
