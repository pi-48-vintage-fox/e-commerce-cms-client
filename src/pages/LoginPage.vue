<template>
  <div class="container-center">
    <div class="card card-login">
      <div class="card-header">
        <img src="/assets/svg/login-bunny.svg" class='login-illustration'>
      </div>
      <div class="card-body">
        <div class="card-body-label">
          <h3>Login to your account</h3>
        </div>
        <div class="form-input">
          <input type="email" name="email" id="email" placeholder="Email" v-model="email">
        </div>
        <div class="form-input">
          <input type="password" name="email" id="email" placeholder="Password" v-model="password">
        </div>
        <div class="form-input">
          <a href="#" class="btn btn-primary text-center btn-lg" @click="login">LOGIN</a>
        </div>
      </div>
    </div>
    <p class="author">Created by Mochamad Zulfikar</p>
  </div>
</template>

<script>
import axios from '../configs/axios'
export default {
  name: 'LoginPage',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$vToastify.loader('Loggin in')
      axios
        .post('/login', {
          email: this.email,
          password: this.password
        })
        .then(response => {
          this.$vToastify.stopLoader()
          this.$vToastify.success('Logged In!', 'Welcome')
          localStorage.setItem('access_token', response.data.access_token)
          this.$store.commit('setToken', response.data.access_token)
          this.$router.push('/products')
        })
        .catch(err => {
          this.$vToastify.stopLoader()
          this.$vToastify.error(err.response.data.msg)
          console.log(err.response)
        })
    }
  }
}
</script>
