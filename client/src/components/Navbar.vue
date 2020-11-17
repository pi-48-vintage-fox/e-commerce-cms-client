<template>
  <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#" @click.prevent="home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="addProduct">Add product</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="category">List category</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="banner">Banner</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{ emailIsLogin }}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">View Profile</a>
          <a class="dropdown-item" href="#"></a>
          <a class="dropdown-item" href="#" @click="logout">logout</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
</div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      emailIsLogin: ''
    }
  },
  methods: {
    getEmailisLogin () {
      const dataEmailLogin = localStorage.getItem('emailIsLogin')
      this.emailIsLogin = dataEmailLogin
    },
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    },
    category () {
      this.$router.push('/category')
    },
    addProduct () {
      this.$router.push('/addproduct')
    },
    home () {
      this.$router.push('/')
    },
    banner () {
      this.$router.push('/banner')
    }
  },
  created () {
    this.getEmailisLogin()
  }
}
</script>

<style>

</style>
