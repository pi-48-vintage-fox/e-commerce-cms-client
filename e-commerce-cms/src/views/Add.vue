<template>
      <div class="card col-4 mx-auto my-2">
        <h2 class="login-text mt-4">Add Product</h2>
        <div class="card-body d-flex flex-row">
            <form class="col-12" @submit.prevent="addProduct">
                <div class="form-group">
                    <label for="add-name">Name</label>
                    <input class="form-control" type="text" v-model="name">
                </div>
                <div class="form-group">
                    <label for="add-image">Image Url</label>
                    <input class="form-control" type="text" v-model="image_url">
                </div>
                <div class="form-group">
                    <label for="add-price">Price</label>
                    <input class="form-control" type="number" v-model="price">
                </div>
                <div class="form-group">
                    <label for="add-stock">Stock</label>
                    <input class="form-control" type="number" v-model="stock">
                </div>
                <div class="form-group">
                    <label for="add-category">Category</label>
                    <select class="form-control" v-model="category" >
                        <option value="game">Game</option>
                        <option value="dlc">DLC</option>
                        <option value="workshop">Workshop</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-success buttons container">Add</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
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
    addProduct () {
      console.log('add yeuuuuu')
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
        category: this.category
      }
      console.log(payload)
      this.$store.dispatch('addProduct', payload)
    }
  }
}
</script>

<style>

</style>
