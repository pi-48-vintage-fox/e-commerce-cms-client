<template>
<div>
  <Navbar/>
  <div id="edit-form">
    <form class="container justify-content-center col-6" @submit.prevent="editProduct">
      <h3 class="text-center mb-5 mt-5">Edit Product</h3>
      <div class="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input type="text" class="form-control" id="edit_name" :placeholder="productToEdit.name" v-model="productToEdit.name">
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Image URL</label>
        <input type="text" class="form-control" id="edit_image_url" :placeholder="productToEdit.image_url" v-model="productToEdit.image_url">
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Price</label>
        <input type="number" class="form-control" id="edit_price" :placeholder="productToEdit.price" v-model="productToEdit.price">
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Stock</label>
        <input type="number" class="form-control" id="edit_stock" :placeholder="productToEdit.stock" v-model="productToEdit.stock">
      </div>
      <button type="submit" class="btn btn-dark" style="width: 100%">Edit Product</button>
    </form>
  </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Swal from 'sweetalert2'
export default {
  name: 'EditProduct',
  components: {
    Navbar
  },
  methods: {
    editProduct () {
      const payload = this.productToEdit
      this.$store.dispatch('editProduct', payload)
        .then(() => {
          this.$router.push('/products')
        })
        .catch(err => {
          Swal.fire(
            'Error!',
            err.response.data.msg,
            'ERROR'
          )
        })
    }
  },
  computed: {
    productToEdit () {
      return this.$store.state.product
    }
  }
}
</script>

<style>

</style>
