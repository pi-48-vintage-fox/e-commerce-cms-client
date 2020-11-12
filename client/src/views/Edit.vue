<template>
    <div>
      <NavBar></NavBar><div class="mt-5">
      <h2> Update Product</h2>
    </div>
      <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="container-form justify-content-center">
              <form class="mt-4">
              <div class="form-group">
                <label><strong>Product</strong></label>
                <input type="text" class="form-control input-text ml-5" v-model="productById.name">
              </div>
              <div class="form-group">
                <label><strong>Price</strong></label>
                <input type="number" class="form-control input-text ml-5" v-model="productById.price">
              </div>
              <div class="form-group">
                <label><strong>Stock</strong></label>
                <input type="number" class="form-control input-text ml-5" v-model="productById.stock">
              </div>
              <div class="form-group">
                <label><strong>Image url</strong></label>
                <input type="text" class="form-control input-text ml-5" v-model="productById.image_url">
              </div>
              <div class="button-submit">
                <button type="submit" class="btn btn-dark" @click.prevent="submitEdit">Submit</button>
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
  name: 'Update',
  data () {
    return {
    }
  },
  methods: {
    submitEdit () {
      console.log(this.$route.params, '<<<')
      const token = localStorage.getItem('access_token')
      const payload = {
        name: this.productById.name,
        price: this.productById.price,
        stock: this.productById.stock,
        image_url: this.productById.image_url,
        id: this.$route.params.id,
        access_token: token
      }
      this.$store.dispatch('updateProduct', payload)
        .then(() => {
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  components: {
    NavBar
  },
  computed: {
    productById () {
      return this.$store.state.product
    }
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
  text-align: justify
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
</style>
