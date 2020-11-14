<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#" @click.prevent="showAll">Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
              <li class="nav-item active">
                  <a class="nav-link" href="#" @click.prevent="showAddForm" >Add New Product!<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item dropdown">
                  <div class="dropdown">
                      <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Category
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" href="#" @click.prevent="showGameOnly">Game</a>
                          <a class="dropdown-item" href="#" @click.prevent="showDLCOnly">DLC</a>
                          <a class="dropdown-item" href="#" @click.prevent="showWorkshopOnly">Workshop</a>
                      </div>
                  </div>
              </li>
          </ul>
          <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                  <a class="nav-link" @click.prevent='logoutsubmit' href="#">Log Out</a>
              </li>
          </ul>
      </div>
    </nav>
    <div class="container mt-5">
      <div class="row row-cols-4">
        <Products v-for="product in $store.state.products" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Products from '../components/Products'
export default {
  name: 'Home',
  components: {
    Products
  },
  methods: {
    logoutsubmit () {
      console.log('WADUH!')
      localStorage.clear()
      this.$router.push({ path: '/login' })
    },
    showAddForm () {
      this.$router.push({ path: '/add' })
    },
    showGameOnly () {
      this.$store.dispatch('showGameOnly')
    },
    showDLCOnly () {
      this.$store.dispatch('showDLCOnly')
    },
    showWorkshopOnly () {
      this.$store.dispatch('showWorkshopOnly')
    },
    showAll () {
      this.$store.dispatch('fetchProducts')
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>
<style>
.dropdown-toggle,
.dropdown-menu {
    border-radius: 0px !important;
}
.dropdown-item:hover {
    color: white;
    background-color: transparent;
}
.btn-danger {
    width: 55%;
}
.dropdown:hover>.dropdown-menu {
  display: block;
}
</style>
