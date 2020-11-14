<template>
  <section id="add-prod">
    <Navbar></Navbar>
    <div class="d-flex justify-content-center my-4">
      <div class="bg-dark px-5" style="border-radius: 5px">
        <form class="mt-4" @submit="addProd">
          <h1 class="h3 mb-4 font-weight-normal text-light">Add New Product</h1>
          <div class="form-group text-left">
            <label for="addName" class="text-light">Name</label>
            <input
              v-model="name"
              type="text"
              id="addName"
              class="form-control"
              required
              autofocus
              placeholder="e.g. Naikin Zoo Shoes"
            />
          </div>
          <div class="form-group text-left">
            <label for="addPrice" class="text-light">Price (IDR)</label>
            <input
              v-model="price"
              type="number"
              id="addPrice"
              class="form-control"
              required
              autofocus
              placeholder="e.g. 1299000"
            />
          </div>
          <div class="form-group text-left">
            <label for="addStock" class="text-light">Stock</label>
            <input
              v-model="stock"
              type="number"
              id="addStock"
              class="form-control"
              required
              autofocus
              placeholder="e.g. 100"
            />
          </div>
          <div class="form-group text-left">
            <label for="addURL" class="text-light">Image URL</label>
            <input
              v-model="imgurl"
              type="url"
              id="addURL"
              class="form-control"
              required
              autofocus
              placeholder="e.g. https://he.id/ops.png"
            />
          </div>
          <button
            class="btn btn-lg btn-outline-light btn-block my-2"
            type="submit"
          >
            Add
          </button>
          <a href="#" class="text-light" @click.prevent="backHome()"
            >Back to homepage</a
          >
          <p class="mt-5 text-muted">&copy; RizkyAkhid</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '../components/Navbar'
import Swal from 'sweetalert2'
export default {
  name: 'AddProduct',
  components: {
    Navbar
  },
  data () {
    return {
      name: '',
      price: '',
      stock: '',
      imgurl: ''
    }
  },
  methods: {
    backHome () {
      this.$router.push('/')
    },
    addProd () {
      const obj = {
        name: this.name,
        price: this.price,
        stock: this.stock,
        image_url: this.imgurl
      }
      this.$store.dispatch('addProduct', obj)
      Swal.fire('Successful', 'A new product has been added to the list!', 'success')
      this.backHome()
    }
  }
}
</script>

<style>
</style>
