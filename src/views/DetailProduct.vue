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
            <form @submit.prevent="buy" class="mt-5">
              <div class="row">
                <div class="col-6">
                  <div class="form-group">
                    <input v-model="stock" type="number" class="form-control">
                  </div>
                </div>
                <div class="col-6">
                  <button type="submit" class="btn btn-primary">Checkout</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-6">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      stock: 0
    }
  },
  methods: {
    getProductById () {
      const id = this.$route.params.id
      this.$store.dispatch('getProductById', id)
    },
    buy () {
      const id = this.$route.params.id
      const buyProduct = {
        id: +id,
        stock: this.stock
      }
      this.$store.dispatch('buy', buyProduct)
        .then(({ data }) => {
          this.$router.push(`/detail/${id}/checkout`)
        })
        .catch(console.log)
    }
  },
  computed: {
    product () {
      return this.$store.state.product
    }
  },
  created () {
    this.getProductById()
  }
}
</script>

<style>

</style>
