<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-6">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">{{ product.name }}</h5>
          </div>
          <div class="card-body">
            <img :src="product.image_url" alt="" class="card-img h-100">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../axios/axiosinstance'
export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProductById () {
      const id = this.$route.params.id
      axios({
        url: `/products/${+id}`,
        method: 'GET'
      })
        .then(({ data }) => {
          this.product = data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getProductById()
  }
}
</script>

<style>

</style>
