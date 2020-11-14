<template>
  <div>
    <div class="container">
      <div class="card">
        <img
          :src="product.image_url"
          alt="Avatar"
          width="200px"
          height="200px"
        />
        <div class="container">
          <h4>
            <b>{{ product.name }}</b>
          </h4>
          <p>Price : Rp {{ product.price.toLocaleString("id-ID") }}</p>
          <p>Stock : {{ product.stock }}</p>
          <button
            type="button"
            class="btn btn-secondary"
            @click.prevent="getProductById"
          >
            Edit
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click.prevent="deleteProduct"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    getProductById () {
      this.$store.dispatch('getProductById', this.product.id).then(() => {
        this.$router.push(`/editProduct/${this.product.id}`)
      })
    },
    deleteProduct () {
      swal({
        title: 'Good job!',
        text: `${this.product.name} has been deleted!`,
        icon: 'success'
      })
      this.$store
        .dispatch('deleteProduct', this.product.id)
        .then(() => {
          return this.$store.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}
</style>
