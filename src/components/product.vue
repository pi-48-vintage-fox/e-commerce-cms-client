<template>
    <tr>
      <td scope="row">{{product.id}}</td>
      <td>{{product.name}}</td>
      <td><img :src="product.image_url" style="width: 100px"></td>
      <td>{{product.price}}</td>
      <td>{{product.stock}}</td>
      <td><button class="btn btn-secondary" @click="deleteProduct(product.id)" style="margin-right: 5px">Delete</button>
      <button class="btn btn-secondary" @click="editProduct(product.id)">Edit</button></td>
    </tr>
</template>

<script>
export default {
  name: 'ProductBody',
  props: ['product'],
  methods: {
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', { id })
    },
    editProduct (id) {
      this.$store.commit('SET_PRODUCT_BY_ID', this.product)
      this.$router.push('/edit_product')
    }
  }
}
</script>

<style>

</style>
