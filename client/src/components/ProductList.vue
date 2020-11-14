<template>
  <tr>
    <th scope="row">{{ product.id }}</th>
    <td>
      <img
        class="img-fluid"
        :src="product.image_url"
        alt=""
        style="max-width: 60%"
      />
    </td>
    <td>{{ product.name }}</td>
    <td>{{ product.price }}</td>
    <td>{{ product.stock }}</td>
    <td>
      <router-link
        @click.native="editBtn"
        class="btn btn-warning m-2"
        :to="`/editproduct/${product.id}`"
        >Edit</router-link
      >
      <button @click="deleteBtn" class="btn btn-danger m-2">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ProductList',
  props: ['product'],
  methods: {
    editBtn () {
      const payload = {
        name: this.product.name,
        image_url: this.product.image_url,
        stock: this.product.stock,
        price: this.product.price
      }
      this.$store.commit('SET_CURRENT', payload)
    },
    deleteBtn () {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store
            .dispatch('deleteproduct', this.product.id)
            .then(({ data }) => {
              this.$swal('Deleted!', 'Your product has been deleted.', 'success')
              this.$store.dispatch('fetchProducts')
            })
            .catch((err) => {
              this.$swal('ERROR', `${err.response.data.msg}`, 'error')
            })
        }
      })
    }
  }
}
</script>

<style>
</style>
