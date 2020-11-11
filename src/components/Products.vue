<template>
    <div>
        <div class="row">
            <div class="col-sm-2 col-auto" id="add-product">
                <form action="" @submit.prevent="addProduct">
                    <h1>Add new Product</h1>
                    <div class="form-group">
                        <label for="product-image-add" class="text-uppercase">product image</label>
                        <input type="text" name="" id="product-image-add" v-model="image_url_add" class="form-control">
                    </div>
                    <span class="text-muted text-uppercase">product info</span>
                    <div class="form-group">
                        <label for="product-name-add">Product Name</label>
                        <input type="text" name="" id="product-name-add" v-model="name_add" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="product-size-S-add"> Size S</label>
                        <input type="number" name="" id="product-size-S-add" v-model="S_add" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="product-size-M-add"> Size M</label>
                        <input type="number" name="" id="product-size-M-add" v-model="M_add" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="product-size-L-add"> Size L</label>
                        <input type="number" name="" id="product-size-L-add" v-model="L_add" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="product-size-XL-add"> Size XL</label>
                        <input type="number" name="" id="product-size-XL-add" v-model="XL_add" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="product-price-add"> Price</label>
                        <input type="number" name="" id="product-price-add" v-model="price_add" class="form-control">
                    </div>
                    <button class="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
            <div class="col-sm-10 col-auto">
                <ProductList/>
            </div>
        </div>
    </div>
</template>

<script>
import ProductList from '../components/ProductList.vue'

export default {
  data () {
    return {
      image_url_add: '',
      name_add: '',
      S_add: '',
      M_add: '',
      L_add: '',
      XL_add: '',
      price_add: ''
    }
  },
  name: 'Products',
  components: {
    ProductList
  },
  methods: {
    addProduct () {
      const data = {
        name: this.name_add,
        image_url: this.image_url_add,
        S: this.S_add,
        M: this.M_add,
        L: this.L_add,
        XL: this.XL_add,
        price: this.price_add
      }
      this.$store.dispatch('addProduct', data)
      this.name_add = ''
      this.image_url_add = ''
      this.S_add = ''
      this.M_add = ''
      this.L_add = ''
      this.XL_add = ''
      this.price_add = ''
    }
  }
}
</script>

<style>
    #add-product {
        height: 100vh;
        border-right: 1px solid black;
    }
</style>
