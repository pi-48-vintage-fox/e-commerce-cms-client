<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand @click.prevent="$router.push('/')" class="brand">Kopi Biji</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item @click.prevent="$router.push('/add')" class="navbar-link">
            <span><strong> New Product</strong></span>
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em style="font-weight: bold; color:white">{{username}}</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click.prevent="logOut">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  data () {
    return {
      username: localStorage.username
    }
  },
  methods: {
    logOut () {
      localStorage.removeItem('access_token')
      this.$router.push('/login')
    }
  }
}
</script>
<style>
.navbar-link span {
  color: #ffff;
}
.brand {
  cursor: pointer;
}
</style>
