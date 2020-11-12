<template>
  <nav class="bg-dark sidebar">
      <div class="sidebar">
        <router-link to="/">Dashboard</router-link>
        <router-link to="/login">login</router-link>
      </div>
      <div class="mt-5 text-primary">
      <div type="button" @click="logout">logout</div>
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
