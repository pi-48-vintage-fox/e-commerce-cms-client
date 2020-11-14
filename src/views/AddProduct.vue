<template>
  <div class="container" id="addProduct">
      <Navbar/>
        <form @submit.prevent="addProduct" >
          <div style="width: 50%; margin: 200px auto;">
            <h1>Add</h1>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" v-model="name" class="form-control" id="add-name"><br/>
              <label for="image_url">image url</label>
              <input type="text" v-model="image_url" class="form-control" id="add-image_url"><br/>
              <label for="price">Price</label>
              <input type="text" v-model="price" class="form-control" id="add-price"><br/>
              <label for="stock">Stock</label>
              <input type="text" v-model="stock" class="form-control" id="add-stock"><br/>
            </div>
            <div class="row">
              <div class="col">
                <button type="submit" class="btn btn-primary form-control">Add</button>
              </div>
          </div>
          </div>
        </form>
      </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'addProduct',
  components: {
    Navbar
  },
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', payload)
    }
  }
}
</script>

<style>

</style>
