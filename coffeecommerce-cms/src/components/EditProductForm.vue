<template>
  <form @submit.prevent="editProduct">
    <div>
      <input type="text" :placeholder="product.name" required="required" v-model="name" />
    </div>
    <br />
    <div>
      <input
        type="text"
        placeholder="Product Image"
        required="required"
        :placeholder="product.image_url"
        v-model="image_url"
      />
    </div>
    <br />
    <div>
      <input type="number" :placeholder="product.price" required="required" v-model="price" />
    </div>
    <br />
    <div>
      <input
        type="number"
        placeholder="Stock Available"
        required="required"
        :placeholder="+product.stock"
        v-model="stock"
      />
    </div>
    <br />

    <div class="row justify-content-center">
      <button type="submit" class="btn btn-success btn-large">
        Edit Product
      </button>
      <button @click="back" class="btn btn-primary btn-large">Back</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'EditForm',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  props: ['product'],
  methods: {
    back () {
      this.$router.push('/')
    },
    editProduct () {
      this.$store.dispatch('editProduct', { name: this.name, image_url: this.image_url, price: +this.price, stock: +this.stock, id: this.product.id })
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
