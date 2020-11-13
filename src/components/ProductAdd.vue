<template>
  <div>
    <form @submit.prevent="addProduct">
    <h1>Add Product</h1>
    <label for="name">Product Name</label>
    <input type="text" v-model="name" name="name">
    <label for="description">Description</label>
    <textarea v-model="description" name="description" cols="15" rows="5"></textarea>
    <label for="price">Price</label>
    <input type="number" v-model="price" name="price">
    <label for="stock">Stock</label>
    <input type="text" v-model="stock" name="stock">
    <label for="categories"></label>
    <select v-model="selectedCat">
      <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{cat.name}}</option>
    </select>

    <div class="center">
      <button type="reset">Clear Form</button>
      <button type="submit">Add</button>
    </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProductAdd',
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  data () {
    return {
      name: '',
      description: '',
      price: 0,
      stock: 0,
      selectedCat: 1
    }
  },

  methods: {
    addProduct () {
      console.log('submit add product')
      this.$store.dispatch('addProduct', {
        name: this.name,
        description: this.description,
        price: this.price,
        stock: this.stock,
        ProductCategoryId: this.selectedCat
      })
    }
  }

}
</script>

<style>
form {
  display: flex;
  flex-direction: column
}

</style>
