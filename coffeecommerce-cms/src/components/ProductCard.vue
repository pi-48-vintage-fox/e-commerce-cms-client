<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" :src="product.image_url" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{product.name}}</h5>
      <p class="card-text">Available Stock : {{product.stock}}</p>
      <p class="card-text">Selling Price Rp {{product.price}}</p>
      <p class="card-text">Expected Revenue Rp {{product.price - product.price *0.7}}</p>

    </div>
    <button @click="filtering(product)" class="btn btn-info btn-sm">Edit Product Detail</button>
    <button @click="hapus(product.id)" class="btn btn-danger btn-sm">Delete Product</button>
  </div>
</template>

<script>
export default {
  name: 'productCard',
  props: ['product'],
  methods: {
    hapus (id) {
      this.$store.dispatch('deleteProduct', { id })
    },
    filtering (product) {
      this.$store.commit('FILTER_PRODUCT', product)
      this.$router.push('/editProduct')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
