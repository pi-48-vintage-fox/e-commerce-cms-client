<template>
  <form
    class="bg-dark mx-auto text-primary my-5 py-5 px-3"
    @submit.prevent="editProduct"
  >
    <div class="form-group">
      <label for="Name">Name</label>
      <input type="text" class="form-control" id="name" v-model="changeProduct.name" />
    </div>
    <label for="image_url">Image</label>
    <input
      type="text"
      class="form-control"
      id="image_url"
      v-model="changeProduct.image_url"
    />
    <div class="form-group">
      <label for="price">price</label>
      <input type="number" class="form-control" id="price" v-model="changeProduct.price" />
    </div>
    <div class="form-group">
      <label for="stock">Stock</label>
      <input type="number" class="form-control" id="stock" v-model="changeProduct.stock" />
    </div>
    <div class="form-group">
      <label for="category">Category</label>
      <input type="text" class="form-control" id="category" v-model="changeProduct.category"/>
    </div>
    <button type="submit" class="btn btn-primary">edit Product</button>
  </form>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
    }
  },
  methods: {
    editProduct () {
      console.log(this.changeProduct)
      const input = {
        id: this.changeProduct.id,
        name: this.changeProduct.name,
        image_url: this.changeProduct.image_url,
        price: this.changeProduct.price,
        stock: this.changeProduct.stock,
        category: this.changeProduct.category
      }
      this.$store.dispatch('editProduct', input)
    }
  },
  computed: {
    changeProduct () {
      return this.$store.state.changeProduct
    }
  }
}
</script>

<style>
</style>
