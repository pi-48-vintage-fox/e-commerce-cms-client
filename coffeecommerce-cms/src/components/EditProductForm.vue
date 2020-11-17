<template>
  <form @submit.prevent="editProduct">
    <div>
      <input type="text" required="required" v-model="filteredProduct.name" />
    </div>
    <br />
    <div>
      <input
        type="text"
        placeholder="Product Image"
        required="required"
        v-model="filteredProduct.image_url"
      />
    </div>
    <br />
    <div>
      <input type="number" required="required" v-model="filteredProduct.price" />
    </div>
    <br />
    <div>
      <input
        type="number"
        placeholder="Stock Available"
        required="required"
        v-model="filteredProduct.stock"
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
      
      this.$store.dispatch('editProduct', { name: this.filteredProduct.name, image_url: this.filteredProduct.image_url, price: +this.filteredProduct.price, stock: +this.filteredProduct.stock, id: this.filteredProduct.id })
        .then((data) => {
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
          this.errorMessage = err
        })
    }
  },
  computed: {
    filteredProduct () {
      return this.$store.state.filtered
    }
  }
}
</script>

<style>
</style>
