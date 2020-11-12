<template>
  <div class="login-page mt-5">
    <div class="container">
      <div class="col-6">
        <form @submit.prevent="login">
          <div class="form-group">
            <input v-model="userLogin.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group mt-5">
            <input v-model="userLogin.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary mt-5">Login</button>
        </form>
        <div class="to-regis mt-5">
          <router-link to="/register">Register</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../axios/axiosinstance'
export default {
  name: 'Login',
  data () {
    return {
      userLogin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      axios({
        method: 'POST',
        url: '/login',
        data: this.userLogin
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('role', data.role)
          this.$router.push({ name: 'Product' })
          location.reload()
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  beforeRouteEnter (to, from, next) {
    const accessToken = localStorage.getItem('access_token')
    if (accessToken) {
      next({ name: 'Product' })
    } else {
      next()
    }
  }
}
</script>

<style>

</style>
