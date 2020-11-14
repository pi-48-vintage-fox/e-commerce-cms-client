<template>
    <div class="col">
        <div class="card" style="width: 18rem;">
        <img :src="product.image_url" class="card-img-top" alt="...">
            <div class="pt-3 mb-3">
            <p class="card-title">{{product.name}}</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Price: Rp.{{product.price}}</li>
            <li class="list-group-item">Stock: {{product.stock}}</li>
            <li class="list-group-item">Category: {{product.category}}</li>
            </ul>
            <div class="card-body">
            <a href="#" @click.prevent="editProduct(product.id)" class="card-link">Edit</a>
            <a href="#" class="card-link" @click.prevent="deleteProduct(product.id)">Delete</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    editProduct (id) {
      this.$store.commit('SET_PRODUCT', this.product)
      this.$router.push({ path: `/edit/${id}` })
    },
    deleteProduct (id) {
      const payload = {
        id
      }
      this.$store.dispatch('deleteProduct', payload)
    }
  }
}
</script>

<style>

</style>
