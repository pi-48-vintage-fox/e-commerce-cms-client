<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <span class="navbar-brand">E-Komers - CMS</span>
  <div class="navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/"><i class="fas fa-home"></i> Dashboard<span class="sr-only"></span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/addproduct"><i class="far fa-plus-square"></i> Add Product<span class="sr-only"></span></router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/"><i class="fas fa-images"></i> Banners<span class="sr-only"></span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/"><i class="far fa-plus-square"></i> Add Banner<span class="sr-only"></span></router-link>
          </li>
        </ul>
      </div>
      <span class="navbar-text">
        <ul class="navbar-nav">
          <li class="nav-link active" id="username">
            <i class="fas fa-user"></i> {{currentUser}}
          </li>
          <li class="nav-item">
            <a @click.prevent="logout" class="nav-link bg-primary text-light text-center border" href="#"><i class="fas fa-power-off"></i> Log Out</a>
          </li>
        </ul>
      </span>
</nav>
</template>
<script>
export default {
    name: 'Navbar',
    data(){
      return {
        currentUser : localStorage.email
      }
    },
    methods:{
    logout(){
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>