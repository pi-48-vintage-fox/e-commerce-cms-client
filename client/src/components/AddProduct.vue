<template>
  <div class="image">
    <div class="container mt-0">
        <!-- Default form contact -->
      <div class="row mb-5 justify-content-center">
        <div class="im">
          <img src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"  class="rounded" alt="">
        </div>
        <div class="col-5 border border-left-0 border-light ">
          <h1 class="mt-4 mb-5">Add Product</h1>
          <form @submit.prevent="addProduct" class="text-center pb-2 pr-5 pl-5">
              <!-- Name -->
              <input v-model="name" type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Name">

              <!-- Image Url -->
              <input v-model="imageUrl" type="text" id="defaultContactFormEmail" class="form-control mb-4" placeholder="Image URL">

              <!-- Price -->
              <input v-model="price" type="number" id="defaultContactFormEmail" class="form-control mb-4" placeholder="Price">

              <!-- Stock -->
              <input v-model="stock" type="number" id="defaultContactFormName" class="form-control mb-4" placeholder="Stock">

              <!-- Send button -->
              <button class="btn btn-info btn-block" type="submit">Submit</button>
              <button @click="cancelButton" class="btn cancel btn-outline-light btn-block" type="">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swal from 'sweetalert2'
export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      imageUrl: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    addProduct () {
      const { name, imageUrl, price, stock } = this
      console.log(name, imageUrl, price)
      this.$store.dispatch('addProduct', { name, imageUrl, price, stock })
      .then(() => {
        this.$router.push('/')
      })
      .catch(err => {
        this.$router.push('/')

      })

      //   .then(({ data }) => {
      //   Swal.fire(
      //     'Success',
      //     `Success added product ${data.name}.`,
      //     'success'
      //   )
      //   this.$dispatch('fetchProducts')
      //   this.$router.push('/')
      // })
      // .catch(err => {
      //   Swal.fire(
      //     'Failed',
      //     `${response.data.message}`,
      //     'error'
      //   )
      //   // console.log(err);
      //   this.$router.push('/Add')
      // })
    },
    cancelButton () {
      this.$router.push('/')
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style scoped>
.row{
  height: 30rem;
}
  h1{
    font-family: 'Big Shoulders Inline Display', cursive;
    color: #192a56;
  }
  img{
    width: 32rem;
  }
  .col-5 {
    background: white;
    box-shadow: 1px 2px 2px #888888;
  }
  .im {
    box-shadow: 1px 2px 2px #888888;
  }
  .cancel {
    color: white;
    background-color: #e84118;
  }
</style>
