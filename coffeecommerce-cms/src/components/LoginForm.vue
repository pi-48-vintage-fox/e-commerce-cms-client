<template>
  <form @submit.prevent="login">
    <div class="input-group form-group">
      <div class="input-group-prepend">
        <span class="input-group-text"><i class="fas fa-user"></i></span>
      </div>
      <input
        type="text"
        class="form-control"
        placeholder="email address"
        v-model="email"
      />
    </div>
    <div class="input-group form-group">
      <div class="input-group-prepend">
        <span class="input-group-text"><i class="fas fa-key"></i></span>
      </div>
      <input
        type="password"
        class="form-control"
        placeholder="password"
        v-model="password"
      />
    </div>
    <div class="row align-items-center remember">
      <input type="checkbox" />Remember Me
    </div>
    <div class="form-group">
      <input type="submit" value="Login" class="btn float-right login_btn" />
    </div>
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', { email: this.email, password: this.password })
        .then(() => {
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
</style>
