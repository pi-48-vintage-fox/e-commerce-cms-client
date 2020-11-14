<template>
<div>
  <Navbar/>
  <div id="add-form">
    <form class="container justify-content-center col-6" @submit.prevent="addProduct">
      <h3 class="text-center mb-5 mt-5">Add Product</h3>
      <div class="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input type="text" class="form-control" id="add_name" v-model="name">
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Image</label>
        <input type="text" class="form-control" id="add_image_url" v-model="image_url">
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Price</label>
        <input type="number" class="form-control" id="add_price" v-model="price">
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Stock</label>
        <input type="number" class="form-control" id="add_stock" v-model="stock">
      </div>
      <button type="submit" class="btn btn-dark" style="width: 100%">Add Product</button>
    </form>
  </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Swal from 'sweetalert2'

export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: 0,
      stock: 0
    }
  },
  components: {
    Navbar
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', payload)
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
  }
}
</script>

<style>

</style>
