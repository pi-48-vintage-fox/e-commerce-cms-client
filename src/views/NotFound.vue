<template>
  <div>
    <h1>Page Not Found</h1>
    <router-link :to="{ name: 'Dashboard' }">Back to dashboard</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  h1 {
    margin-bottom: 2rem
  }
</style>
