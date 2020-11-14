<template>
  <nav class="bg-dark sidebar">
      <div class="sidebar">
        <router-link v-if="this.$route.name !== 'Login'" to="/">Dashboard</router-link>
        <router-link v-if="this.$route.name === 'Login'" to="/login">Login</router-link>
      </div>
      <div class="mt-5 text-primary">
      <div type="button" v-if="this.$route.name !== 'Login'" @click="logout">Logout</div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push({ path: '/login' })
    }
  }

}
</script>

<style>
.button {
  border: none;
}
</style>
