<template>
   <div class="image">
    <div class="container mt-5">
        <!-- Default form contact -->
      <div class="row mb-5 justify-content-center">
        <div class="im">
          <img src="https://images.unsplash.com/photo-1501780392773-287d506245a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="">
        </div>
        <div class="col-4 border border-left-0 border-light ">
          <h2 class="mt-4 mb-4">Edit {{ $store.state.product.name }}</h2>
          <form @submit.prevent="editProduct" class="text-center mb-2 pb-2 pr-5 pl-5">
              <!-- Name -->
              <input v-model="name" type="text" id="defaultContactFormName" class="form-control form-control-sm mb-4" placeholder="Name">

              <!-- Image Url -->
              <input v-model="image_url" type="text" id="defaultContactFormEmail" class="form-control form-control-sm mb-4" placeholder="Image URL">

              <!-- Price -->
              <input v-model="price" type="number" id="defaultContactFormEmail" class="form-control form-control-sm mb-4" placeholder="Price">

              <!-- Stock -->
              <input v-model="stock" type="number" id="defaultContactFormName" class="form-control form-control-sm mb-4" placeholder="Stock">

              <!-- Send button -->
              <button class="btn btn-info btn-sm btn-block" type="submit">Submit</button>
              <button @click="cancelButton" class="btn cancel btn-outline-light btn-sm btn-block" type="" >Cancel</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Edit',
  data() {
    return {
      id: this.$store.state.product.id,
      name: this.$store.state.product.name,
      image_url: this.$store.state.product.image_url,
      price: this.$store.state.product.price,
      stock: this.$store.state.product.stock
    }
  },
  methods: {
    editProduct () {
      const { id, name, image_url, price, stock } = this
      console.log(id, name);
      this.$store.dispatch('editProduct', { id, name, image_url, price, stock })
        .then(() => {
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err);
        })
    },
    cancelButton () {
      this.$router.push('/')
    }
  }

}
</script>

<style scoped>
  .row{
  height: 25rem;
}
  h2{
    font-family: 'Big Shoulders Inline Display', cursive;
    color: #192a56;
  }
  img{
    width: 40rem;
  }
  .col-4 {
    background: white;
    box-shadow: 1px 2px 2px #888888;
  }
  .im {
    box-shadow: 1px 2px 2px #888888;
  }
  .cancel {
    background-color: #e84118;
  }
</style>