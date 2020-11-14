<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/add_product">Add Product</router-link> |
    <router-link to="/banners">Banner</router-link> |
    <strong @click="logout" style="font-weight: bold">Logout</strong>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/Login')
      Swal.fire('Log out successful')
    }
  }
}
</script>

<style>

</style>
