<template>
  <div class="container">
    <h2 class="text-white bg-dark">Hi ... {{name}}</h2>
    <h4 class="text-dark bg-light">kamu adalah seorang: {{role}}</h4>
    <button @click="addProduct" class="btn-primary">Add New Product</button>

    <div class="row justify-content-between">
        <productCard class="mt-5" v-for="product in $store.state.products" :key="product.id" :product="product"></productCard>
    </div>
    <button @click='logout' class="btn-danger btn-lg">LOGOUT</button>
  </div>
</template>

<script>
// @ is an alias to /src
import productCard from '../components/ProductCard'

export default {
  name: 'Home',
  components: {
    productCard
  },
  data () {
    return {
      name: localStorage.getItem('username'),
      role: localStorage.getItem('role')
    }
  },
  methods: {
    addProduct () {
      this.$router.push('/addproduct')
    },
    logout () {
      localStorage.removeItem('username')
      localStorage.removeItem('role')
      localStorage.removeItem('access_token')
      this.$router.push('/login')
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>
<style scoped>
 /* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
