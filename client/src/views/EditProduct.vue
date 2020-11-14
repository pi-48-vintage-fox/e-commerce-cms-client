<template>
  <div>
    <form @submit.prevent="editproduct" class="box p-3">
      <h1>Edit Product</h1>
      <label for="name">Product Name :</label>
      <input v-model="name" id="name" type="text" placeholder="Product Name" required />
      <label for="image_url">Image URL :</label>
      <input v-model="image_url" id="image_url" type="text" placeholder="Image URL" required />
      <label for="price">Price :</label>
      <input v-model="price" id="price" type="number" min="0" placeholder="Price" required />
      <label for="stock">Stock :</label>
      <input v-model="stock" id="stock" type="number" min="0" placeholder="Stock" required />
      <button type="submit">Edit Product</button>
    <button @click="cancelBtn" type="button">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditProduct',
  data () {
    return {
    }
  },
  methods: {
    editproduct () {
      const payload = {
        id: this.$route.params.id,
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('editproduct', payload)
        .then(({ data }) => {
          this.$swal(
            'SUCCESS',
        `${data.name} has been edited!`,
        'success'
          )
          this.$router.push('/')
        })
        .catch(err => {
          this.$swal(
            'ERROR',
        `${err.response.data.msg}`,
        'error'
          )
        })
    },
    cancelBtn () {
      this.$store.commit('SET_CURRENT', {})
      this.$router.push('/')
    }
  },
  computed: {
    name: {
      get () {
        return this.$store.state.productName
      },
      set (value) {
        this.$store.commit('SET_NAME', value)
      }
    },
    image_url: {
      get () {
        return this.$store.state.productUrl
      },
      set (value) {
        this.$store.commit('SET_URL', value)
      }
    },
    stock: {
      get () {
        return this.$store.state.productStock
      },
      set (value) {
        this.$store.commit('SET_STOCK', value)
      }
    },
    price: {
      get () {
        return this.$store.state.productPrice
      },
      set (value) {
        this.$store.commit('SET_PRICE', value)
      }
    }
  }
}
</script>

<style>
.box input[type="text"],
.box input[type="number"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 10px 10px;
  width: 250px;
  outline: none;
  color: white;
  border-radius: 10px;
  transition: 0.25s;
}

.box input[type="text"]:focus,
.box input[type="number"]:focus {
  width: 300px;
  border-color: #2ecc71;
}

.box button[type="submit"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 10px;
  transition: 0.25s;
  cursor: pointer;
}

.box button[type="button"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #df2c2c;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 10px;
  transition: 0.25s;
  cursor: pointer;
}

.box button[type="submit"]:hover {
  background: #2ecc71;
}

.box button[type="button"]:hover {
  background: #df2c2c;
}
</style>
