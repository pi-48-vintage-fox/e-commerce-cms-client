<template>
  <form
    class="bg-dark mx-auto text-primary my-5 py-5 px-3"
    @submit.prevent="addProduct"
  >
    <div class="form-group">
      <label for="Name">Name</label>
      <input type="text" class="form-control" id="name" v-model="name" />
    </div>
    <label for="image_url">Image</label>
    <input
      type="text"
      class="form-control"
      id="image_url"
      v-model="image_url"
    />
    <div class="form-group">
      <label for="price">price</label>
      <input type="number" class="form-control" id="price" v-model="price" />
    </div>
    <div class="form-group">
      <label for="stock">Stock</label>
      <input type="number" class="form-control" id="stock" v-model="stock" />
    </div>
    <div class="form-group">
      <label for="category">Category</label>
      <input type="text" class="form-control" id="category" v-model="category"/>
    </div>
    <button type="submit" class="btn btn-primary">Add Product</button>
  </form>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: 0,
      stock: 0,
      category: ''
    }
  },
  methods: {
    addProduct () {
      const input = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
        category: this.category
      }
      this.$store.dispatch('addProduct', input)
        .then(data => {
          this.$router.push({ path: '/' })
        })
    }
  }
}
</script>

<style>
</style>
