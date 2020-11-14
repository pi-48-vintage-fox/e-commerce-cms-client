<template>
  <section id="edit-prod">
    <Navbar></Navbar>
    <div class="d-flex justify-content-center my-4">
      <div class="bg-dark px-5" style="border-radius: 5px">
        <form class="mt-4">
          <h1 class="h3 mb-4 font-weight-normal text-light">Edit Product</h1>
          <div class="form-group text-left">
            <label for="editName" class="text-light">Name</label>
            <input
              v-model="name"
              type="text"
              id="editName"
              class="form-control"
              required
              autofocus
              placeholder="e.g. Naikin Zoo Shoes"
            />
          </div>
          <div class="form-group text-left">
            <label for="editPrice" class="text-light">Price</label>
            <input
              v-model="price"
              type="number"
              id="editPrice"
              class="form-control"
              required
              autofocus
              placeholder="e.g. 1299000"
            />
          </div>
          <div class="form-group text-left">
            <label for="editStock" class="text-light">Stock</label>
            <input
              v-model="stock"
              type="number"
              id="editStock"
              class="form-control"
              required
              autofocus
              placeholder="e.g. 100"
            />
          </div>
          <div class="form-group text-left">
            <label for="editURL" class="text-light">Image URL</label>
            <input
              v-model="imgurl"
              type="url"
              id="editURL"
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
            Edit
          </button>
          <a href="#" class="text-light" @click.prevent="backHome">Back to homepage</a>
          <p class="mt-5 text-muted">&copy; RizkyAkhid</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'EditProduct',
  components: {
    Navbar
  },
  methods: {
    backHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
