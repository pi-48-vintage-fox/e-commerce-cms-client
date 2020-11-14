<template>
    <div class="card col-4 mx-auto my-2">
        <h2 class="login-text mt-4">Edit Product</h2>
        <div class="card-body d-flex flex-row">
            <form class="col-12" @submit.prevent="editProduct(product.id)">
                <div class="form-group">
                    <label for="edit-name">Name</label>
                    <input class="form-control" type="text" v-model="product.name">
                </div>
                <div class="form-group">
                    <label for="edit-image">Image Url</label>
                    <input class="form-control" type="text" v-model="product.image_url">
                </div>
                <div class="form-group">
                    <label for="edit-price">Price</label>
                    <input class="form-control" type="number" v-model="product.price">
                </div>
                <div class="form-group">
                    <label for="edit-stock">Stock</label>
                    <input class="form-control" type="number" v-model="product.stock">
                </div>
                <div class="form-group">
                    <label for="edit-category">Status</label>
                    <select class="form-control" v-model="product.category" >
                        <option value="game">Game</option>
                        <option value="dlc">DLC</option>
                        <option value="workshop">Workshop</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-success buttons container">Edit</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    product () {
      return this.$store.state.product
    }
  },
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: '',
      category: ''
    }
  },
  methods: {
    editProduct (id) {
      const payload = this.product
      this.$store.dispatch('editProduct', payload)
    }
  }
}
</script>

<style>

</style>
