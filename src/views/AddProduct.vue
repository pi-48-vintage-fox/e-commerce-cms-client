<template>
  <section>
    <HomeNavbar></HomeNavbar>
    <h1>ADD THE PRODUCTS HERE</h1>
    <form>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="name" />
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Price</label>
        <div class="col-sm-10">
          <input type="number" class="form-control" v-model="price" />
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Stock</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="stock" />
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Image URL</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="image_url" />
        </div>
      </div>

      <div class="form-group row">
        <div class="col-sm-10"></div>
      </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button type="submit" class="btn btn-primary" @click.prevent="addProduct">Add Products</button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import HomeNavbar from '../components/HomeNavbar'
export default {
  name: 'AddProduct',
  components: {
    HomeNavbar
  },
  data () {
    return {
      name: '',
      price: '',
      stock: '',
      image_url: ''
    }
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.name,
        price: this.price,
        stock: this.stock,
        image_url: this.image_url
      }
      this.$store.dispatch('addProduct', payload)
        .then(() => {
          this.$router.push('/')
        })
    }
  }
}
</script>

<style></style>
