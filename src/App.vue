<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link v-if="!loggedIn" to="/login">Login</router-link>
      <a href="#" id="logout-btn" v-else-if="loggedIn" @click.prevent="logout">Logout</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  data () {
    return {}
  },
  methods: {
    logout () {
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#006666',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, log out!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Logged Out!', 'Your have been logged out!.', 'success')
          this.$store.dispatch('logout')
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Logged out successfully'
          })
        }
      })
        .catch(console.log)
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.loggedIn
    }
  },
  created () {
    if (localStorage.getItem('token')) {
      this.$store.commit('isLogin', true)
    } else {
      this.$store.commit('isLogin', false)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-image: url("https://cdn.shopify.com/s/files/1/1057/4058/products/illustration-old-bone-white_600x.jpg?v=1575828861");
  background-repeat: repeat-y;
  background-size: cover;
  background-position-x: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.5em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#logout-btn:hover {
  color: #d33 !important;
  transition: 300ms;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a:hover {
  color: #42b983;
  transition: 300ms;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
