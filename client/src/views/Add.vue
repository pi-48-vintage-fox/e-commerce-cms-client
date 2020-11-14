<template>
  <div>
    <NavBar></NavBar>
    <div class="mt-5">
      <h2> New Product</h2>
    </div>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="container-form justify-content-center">
              <form class="mt-4">
              <div class="form-group">
                <label><strong>Product</strong></label>
                <input type="text" class="form-control input-text ml-5" v-model="product_name">
              </div>
              <div class="form-group">
                <label><strong>Price</strong></label>
                <input type="number" class="form-control input-text ml-5" v-model="price">
              </div>
              <div class="form-group">
                <label><strong>Stock</strong></label>
                <input type="number" class="form-control input-text ml-5" v-model="stock">
              </div>
              <div class="form-group">
                <label><strong>Image url</strong></label>
                <input type="text" class="form-control input-text ml-5" v-model="image_url">
              </div>
              <div class="button-submit">
                <button type="submit" class="btn btn-primary button" @click.prevent="addNewProduct">Submit</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '../components/NavBar.vue'
export default {
  name: 'Add',
  data () {
    return {
      product_name: '',
      price: '',
      stock: '',
      image_url: ''
    }
  },
  methods: {
    addNewProduct () {
      const payload = {
        name: this.product_name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', payload)
        .then(() => {
          return this.$swal.fire({
            position: 'mid',
            icon: 'success',
            title: 'New Data has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .then(() => {
          this.product_name = ''
          this.price = ''
          this.stock = ''
          this.image_url = ''
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  components: {
    NavBar
  }
}
</script>
<style>
.container-form {
  width: 500px;
  height: 500px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #69bdd2;
  color: white;
  text-align: justify;
  background-image: url('https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80');
  background-size: cover;
}
input[type=text] {
    background: transparent;
    border: none;
    border-bottom: 1px solid #000000;
    width: 80%
}
input[type=number] {
    background: transparent;
    border: none;
    border-bottom: 1px solid #000000;
    width: 80%
}
label {
  margin-left: 50px;
  font-size: 20px
}
.button-submit {
  display: flex;
  justify-content: center;
  width: 100%;
}
.button {
  width: 80%
}
</style>
