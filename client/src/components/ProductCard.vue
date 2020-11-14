<template>
  <tr>
    <th class="justify-content-start">
      <img :src="product.image_url" class="img-rounded" alt="">
    </th>
    <td class="align-middle">{{ product.name }}</td>
    <td class="align-middle">{{ product.price }}</td>
    <td class="align-middle">{{ product.stock }}</td>
    <td class="align-middle">
      <button @click.prevent="editProduct" class="btn btn-outline-secondary material-icons">edit</button>
      <i class="pisah">d</i>
      <button @click="deleteProduct(product.id)" class="btn btn-outline-secondary material-icons">delete</button>
    </td>
  </tr>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  props: ['product'],
  methods: {
    editProduct () {
      this.$store.commit('setProduct', this.product)
      this.$store.dispatch('getProduct', this.product.id)
      this.$router.push(`/Edit/${this.product.id}`)
    },

    deleteProduct (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#45aaf2',
        cancelButtonColor: '#e84118',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('deleteProduct', { id })
          }
        })
    }
  }
}
</script>

<style scope>
  .align-middle{
    font-family: 'Ubuntu', sans-serif;
    font-size: 0.8rem;
  }
  .img-rounded{
    height: 130px;
    width: 180px;
  }
  .pisah {
    color: white;
  }
  .btn{
    border: 0px solid;
    color: yellow;
  }
</style>
