<template>
  <section>
    <HomeNavbar></HomeNavbar>
    <h1>EDIT THE PRODUCTS HERE</h1>
    <form>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="product.name" />
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Price</label>
        <div class="col-sm-10">
          <input type="number" class="form-control" v-model="product.price" />
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Stock</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="product.stock" />
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Image URL</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="product.image_url" />
        </div>
      </div>

      <div class="form-group row">
        <div class="col-sm-10"></div>
      </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button
            type="submit"
            class="btn btn-primary"
            @click.prevent="editProduct"
          >
            Edit Products
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import HomeNavbar from '../components/HomeNavbar'
export default {
  name: 'EditProduct',
  components: {
    HomeNavbar
  },
  computed: {
    product () {
      return this.$store.state.product
    }
  },
  methods: {
    editProduct () {
      const payload = {
        id: this.$route.params.id,
        name: this.product.name,
        price: this.product.price,
        stock: this.product.stock,
        image_url: this.product.image_url
      }
      this.$store.dispatch('editProduct', payload)
        .then(() => {
          console.log('edit success')
          this.$router.push('/')
        })
        .catch((err) => {
          const error = err.response.data.message
          swal('Error', `${error}`, 'error');
          this.$router.push(`/editProduct/${id}`)
        })
    }
  }
}
</script>

<style></style>
