<template>
<div class="container-edit-main flex-col center">
    <!-- <form @submit.prevent="editProduct"> -->
    <h1>Edit Product</h1>

  <div class="container-edit-form flex-col">
    <!-- <label for="name">Product Name</label> -->
    <vs-input label="Product Name" type="text" v-model="name" name="name" />
    <label for="description">Description</label>
    <textarea type="text" v-model="description" label="Description" name="description" cols="15" rows="5"></textarea>
    <!-- <label for="price">Price</label> -->
    <vs-input label="Price" type="number" v-model="price" name="price"/>
    <!-- <label for="stock">Stock</label> -->
    <vs-input label="Stock" type="number" v-model="stock" name="stock"/>
    <label for="categories">Category</label>
    <select filter name="categories" label="Category" v-model="ProductCategoryId">
      <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{cat.name}}</option>
    </select>

    <div class="flex-row center" >
      <vs-button flat dark @click.prevent="$router.go(-1)">Cancel</vs-button>
      <vs-button @click="editProduct">Update</vs-button>
    </div>
    <!-- </form> -->
  </div>
  </div>
</template>

<script>
export default {
  name: 'ProductEdit',
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  data () {
    return {
      name: '',
      description: '',
      price: 0,
      stock: 0,
      imageUrl: '',
      ProductCategoryId: ''
    }
  },
  created () {
    this.$store.dispatch('fetchProductDetails', this.$route.params.id)
      .then(({ data }) => {
        console.log(data, '<<<<< product details')
        this.name = data.name
        this.description = data.description
        this.price = data.price
        this.stock = data.stock
        this.imageUrl = data.imageUrl
        this.ProductCategoryId = data.ProductCategoryId
      })
      .catch(err => {
        console.log(err.response)
        this.$toasted.global.errorMessage(err.response.data)
      })
  },

  methods: {
    editProduct () {
      console.log('submit edit product')
      this.$store.dispatch('editProduct', {
        id: this.$route.params.id,
        name: this.name,
        description: this.description,
        price: this.price,
        stock: this.stock,
        ProductCategoryId: this.ProductCategoryId
      })
    }
  }

}
</script>

<style>

  .container-edit-form {
    width: 60%;
    min-width: 400px
  }
/* form {
  display: flex;
  flex-direction: column
} */
  .vs-input-parent {
    /* min-width: 300px */
    margin-bottom: 2rem;
    width: 100%;
  }

  /* .vs-input-parent + .vs-input-parent {
    margin-bottom: 2rem;

    } */

  .vs-input, textarea {
    width: 100% !important
  }

  label, vs-input__label {
    text-align: left;
    font-size: 0.75rem
  }
  textarea, select {
    border-radius: 12px;
    background-color: rgb(244, 247, 248);
    border: 0 ;
    padding: 7px 13px 7px 10px;
    outline: none;
    margin-bottom: 2rem;
  }

</style>
