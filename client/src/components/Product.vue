<template>
<div class="col-3 mt-2">
       <div class="card">
        <img :src="dataProduct.image_url" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ dataProduct.name }}</h5>
                <p class="card-text">Rp. {{ formatToRupiah }},-</p>
                <p class="card-text">Category : {{ dataProduct.Category.name }}</p>
                <a href="#" @click.prevent="updateProduct(dataProduct.id)">Edit</a>
                ||
                <a href="#" @click.prevent="deleteProduct(dataProduct.id)">Delete</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      price: 0
    }
  },
  props: ['dataProduct'],
  methods: {
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
        .then(() => {
          this.$store.dispatch('fetchProduct')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    updateProduct (id) {
      this.$router.push(`/updateproduct/${id}`)
    }
  },
  computed: {
    formatToRupiah () {
      const angka = this.dataProduct.price
      var reverse = angka.toString().split('').reverse().join('')
      var ribuan = reverse.match(/\d{1,3}/g)
      ribuan = ribuan.join('.').split('').reverse().join('')
      return ribuan
    }
  }
}
</script>

<style>

</style>
