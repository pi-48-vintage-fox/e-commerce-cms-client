<template>
  <div class="mt-3">
    <h1 class="text-white">Add New Product Detail</h1>
    <form @submit.prevent="addingProduct">
      <div>
        <input
          type="text"
          placeholder="Product Name"
          required="required"
          v-model="name"
        />
      </div>
      <br />
      <div>
        <input
          type="text"
          placeholder="Product Image"
          required="required"
          v-model="image_url"
        />
      </div>
      <br />
      <div>
        <input
          type="number"
          placeholder="Product Price"
          required="required"
          v-model="price"
        />
      </div>
      <br />
      <div>
        <input
          type="number"
          placeholder="Stock Available"
          required="required"
          v-model="stock"
        />
      </div>
      <br />

      <div class="row justify-content-center">
        <button type="submit" class="btn btn-success btn-large">
          Add New Product
        </button>
        <button @click="back" class="btn btn-primary btn-large">Back</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    back () {
      this.$router.push('/')
    },
    addingProduct () {
      this.$store.dispatch('addProduct', { name: this.name, image_url: this.image_url, price: +this.price, stock: +this.stock })
        .then((data) => {
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
          this.errorMessage = err
        })
    }
  }
}
</script>

<style>
</style>
