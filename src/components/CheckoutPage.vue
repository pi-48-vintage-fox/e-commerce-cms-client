<template>
  <h1>Checkout</h1>
</template>

<script>
export default {
  name: 'Checkout',
  beforeRouteEnter (to, from, next) {
    console.log(to, '<<to')
    const accessToken = localStorage.getItem('access_token')
    if (accessToken) {
      next()
    } else {
      next({ name: 'Login' })
    }
  }
}
</script>

<style>

</style>
