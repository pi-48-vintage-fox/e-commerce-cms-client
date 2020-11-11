<template>
  <div>
      <form action="" @submit.prevent="editProduct">
                    <h1>Add new Product</h1>
                    <div class="form-group">
                        <label for="product-image-edit" class="text-uppercase">product image</label>
                        <input type="text" name="" id="product-image-edit" v-model="image_url_edit" class="form-control">
                    </div>
                    <span class="text-muted text-uppercase">product info</span>
                    <div class="form-group">
                        <label for="product-name-edit">Product Name</label>
                        <input type="text" name="" id="product-name-edit" v-model="name_edit" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="product-size-S-edit"> Size S</label>
                        <input type="number" name="" id="product-size-S-edit" v-model="S_edit" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="product-size-M-edit"> Size M</label>
                        <input type="number" name="" id="product-size-M-edit" v-model="M_edit" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="product-size-L-edit"> Size L</label>
                        <input type="number" name="" id="product-size-L-edit" v-model="L_edit" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="product-size-XL-edit"> Size XL</label>
                        <input type="number" name="" id="product-size-XL-edit" v-model="XL_edit" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="product-price-edit"> Price</label>
                        <input type="number" name="" id="product-price-edit" v-model="price_edit" class="form-control">
                    </div>
                    <button class="btn btn-primary" type="submit">Submit</button>
                    <button class="btn btn-danger" type="button" @click="cancelEdit">Cancel</button>
                </form>
  </div>
</template>

<script>
export default {
  name: 'EditProduct',
  data () {
    return {
      image_url_edit: '',
      name_edit: '',
      S_edit: '',
      M_edit: '',
      L_edit: '',
      XL_edit: '',
      price_edit: ''
    }
  },
  methods: {
    populateToStateLocal () {
      this.name_edit = this.populateData.name
      this.image_url_edit = this.populateData.image_url
      this.S_edit = this.populateData.S
      this.M_edit = this.populateData.M
      this.L_edit = this.populateData.L
      this.XL_edit = this.populateData.XL
      this.price_edit = this.populateData.price
    },
    cancelEdit () {
      this.$router.push({ path: '/admin/products' })
    },
    editProduct () {
      const id = +this.$route.params.id
      const data = {
        name: this.name_edit,
        image_url: this.image_url_edit,
        S: this.S_edit,
        M: this.M_edit,
        L: this.L_edit,
        XL: this.XL_edit,
        price: this.price_edit
      }
      const payload = { id, data }
      this.$store.dispatch('editProduct', payload)
    }
  },
  computed: {
    populateData () {
      return this.$store.getters.populateData
    }
  },
  created () {
    console.log(this.$route.params, '<<<<<<')
    console.log(this.populateData, '<<<<<<')
    this.populateToStateLocal()
  }
}
</script>

<style>

</style>
