<template>
  <div class="card mb-3" style="max-width: 540px; margin-top: 50px; margin-left: 5px;">
  <router-link to="/addProduct">
    <button type="button" class="btn btn-primary form-control" style="width:20%">Add Product</button>
  </router-link><br>
  <div class="row no-gutters" v-for="item in products" :key="item.id">
    <div class="col-md-4">
      <img :src="`${item.image_url}`" class="card-img" >
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{item.name}}</h5>
        <p class="card-text">RP.{{item.price.toLocaleString()}}</p>
        <p class="card-text">stock: {{item.stock}}</p>
        <button class="btn-primary" @click="editProduct(item)">Edit</button>
        <button class="btn-danger" @click="deleteProduct(item.id)">delete</button>
      </div>
      <br>
    </div>
   </div>
</div>
</template>

<script>
export default {
  name: 'ProductTable',
  props: ['products'],
  methods: {
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    },
    editProduct (data) {
      this.$store.commit('EDITPRODUCT', data)
      this.$router.push({ name: 'editProduct', params: { id: data.id } })
    }
  }
}
</script>

<style>
</style>
