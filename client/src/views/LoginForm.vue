<template>
  <div>
    <div class="body"></div>
    <div class="grad"></div>
    <br />
    <form @submit.prevent="login">
      <div class="login">
        <input type="email"
        v-model="email"
        placeholder="email"
        /><br />
        <input
          type="password"
          v-model="password"
          placeholder="password"
        /><br />
        <input type="submit" value="Login" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
        .then(() => {
          this.$router.push({ path: '/Product' })
        })
        .catch((err) => {
          const msg = err.response.data.errors[0]
        })
    }
  }
}
</script>
