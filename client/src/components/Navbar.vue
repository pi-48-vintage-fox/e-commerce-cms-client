<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#" @click.prevent="backHome">OnCom</a>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#" @click.prevent="addProdPage"
          >Add Product</a
        >
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <a
        href="#"
        class="btn btn-outline-light my-2 my-sm-0"
        @click.prevent="logout"
        >Log out</a
      >
    </form>
  </nav>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Navbar',
  methods: {
    backHome () {
      this.$router.push('/')
    },
    addProdPage () {
      this.$router.push('/add-product')
    },
    logout () {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You are going to log out from this web!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: "Yes, I'm done!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Logged out!', 'You are successfully logged out from the app!', 'success')
          localStorage.clear()
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>

<style>
</style>
