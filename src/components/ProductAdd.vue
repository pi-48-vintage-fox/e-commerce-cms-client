<template>
  <div class="container-edit-main flex-col center">

    <!-- <form @submit.prevent="addProduct"> -->
    <h1>Add Product</h1>
  <div class="container-edit-form flex-col">

    <!-- <label for="name">Product Name</label> -->
    <vs-input type="text" v-model="name" label="Product Name" name="name"></vs-input>
    <label for="description">Description</label>
    <textarea v-model="description" name="description" cols="15" rows="5"></textarea>
    <!-- <label for="price">Price</label> -->
    <vs-input type="number" v-model="price" label="Price" name="price"></vs-input>
    <!-- <label for="stock">Stock</label> -->
    <vs-input type="number" v-model="stock" label="Stock" name="stock"></vs-input>
    <div class="flex-row fullwidth">
      <vs-input type="text" v-model="imageUrl" label="Image URL" name="name"></vs-input>
      <vs-button class="btn" succes @click="previewUrl = imageUrl">Preview</vs-button>
    </div>
    <label for="categories">Category</label>
    <img class="image-preview" :src="previewUrl" alt="">

    <select v-model="ProductCategoryId">
      <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{cat.name}}</option>
    </select>

    <div class="flex-row center fullwidth">
      <vs-button flat type="reset">Clear Form</vs-button>
      <vs-button @click="addProduct">Add</vs-button>
    </div>
    <!-- </form> -->
  </div>
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
      imageUrl: '',
      ProductCategoryId: '',
      previewUrl: ''
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
        imageUrl: this.imageUrl,
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
