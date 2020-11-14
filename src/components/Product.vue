<template>
  <div class="card" style="width: 18rem; margin: 10px">
      <img
        :src="product.image_url"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <p class="card-text" style="font-size: 20px; margin-bottom: -33px">{{ product.name }}</p>
        <div class="btn btn-primary" style="font-size: 10px; width: 80px; margin-left: 170px;">{{ product.category }}</div>
        <p class="card-text" style="margin-bottom: 1px;"><b>IDR {{ product.price }}</b></p>
        <p class="card-text" style="font-size: 15px;">Stock: {{ product.stock }}</p>
        <a href="" @click.prevent="editProducts(product)"
          style="margin-right: 15px;"><i
          class="fas fa-pencil-alt"
          aria-hidden="true"
          style="margin-right: 10px; cursor: pointer"
        ></i></a>
        <a href="" @click.prevent="deleteProducts(product.id)"><i
          class="fas fa-trash-alt"
          aria-hidden="true"
          style="margin-right: 10px; cursor: pointer"
        ></i></a>
      </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'Product',
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    deleteProducts (id) {
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
          this.$store.dispatch('deleteProducts', { id })
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    },
    editProducts (payload) {
      this.$store.commit('SET_EDIT_FORM')
      this.$store.commit('SET_EDIT_DATA', payload)
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  props: ['product'],
  created () {
    this.fetchProducts()
  }
}
</script>
