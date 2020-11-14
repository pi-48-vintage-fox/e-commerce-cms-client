<template>
  <div>
      <table class="table" border="1">
          <thead>
              <tr>
                  <td rowspan="2">No</td>
                  <td rowspan="2">Image</td>
                  <td rowspan="2">Name</td>
                  <td rowspan="2" colspan="4">Stock</td>
                  <td rowspan="2">Price</td>
                  <td rowspan="2">Action</td>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>S</td>
                  <td>M</td>
                  <td>L</td>
                  <td>XL</td>
                  <td></td>
              </tr>
              <tr v-for="(product, index) in products" :key="product.id">
                  <td>{{ index + 1 }}</td>
                  <td><img :src="product.image_url" alt="" class="img-fluid" width="150px"></td>
                  <td>{{ product.name }}</td>
                  <td>{{ product.S }}</td>
                  <td>{{ product.M }}</td>
                  <td>{{ product.L }}</td>
                  <td>{{ product.XL }}</td>
                  <td>{{ product.price }}</td>
                  <td>
                      <button type="submit" class="btn btn-info" @click="editProduct(product.id)">Edit</button>
                      <button type="submit" class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button>
                  </td>
              </tr>
          </tbody>
      </table>
    <!-- <b-table striped bordered :items="products"></b-table> -->
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'ProductList',
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    deleteProduct (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.$store.dispatch('deleteProduct', id)
        }
      })
    },
    editProduct (id) {
      this.$router.push({ path: `products/edit/${id}` })
      this.$store.commit('ID_FOR_EDIT', id)
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>

</style>
