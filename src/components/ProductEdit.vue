<template>
  <div>
    <form @submit.prevent="editProduct">
    <h1>Edit Product</h1>
    <label for="name">Product Name</label>
    <input type="text" v-model="name" name="name">
    <label for="description">Description</label>
    <textarea v-model="description" name="description" cols="15" rows="5"></textarea>
    <label for="price">Price</label>
    <input type="number" v-model="price" name="price">
    <label for="stock">Stock</label>
    <input type="text" v-model="stock" name="stock">
    <label for="categories"></label>
    <select v-model="ProductCategoryId">
      <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{cat.name}}</option>
    </select>

    <div class="center">
      <button type="reset">Clear Form</button>
      <button type="submit">Update</button>
    </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProductEdit',
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
      ProductCategoryId: 1
    }
  },
  created () {
    this.$store.dispatch('fetchProductDetails', this.$route.params.id)
      .then(({ data }) => {
        console.log(data, '<<<<< product details')
        this.name = data.name
        this.description = data.description
        this.price = data.price
        this.stock = data.stock
        this.ProductCategoryId = data.ProductCategoryId
      })
      .catch(err => {
        console.log(err)
      })
  },

  methods: {
    editProduct () {
      console.log('submit edit product')
      this.$store.dispatch('editProduct', {
        id: this.$route.params.id,
        name: this.name,
        description: this.description,
        price: this.price,
        stock: this.stock,
        ProductCategoryId: this.ProductCategoryId
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
