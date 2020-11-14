<template>
<div class="container mt-5">
  <div class="row justify-content-center">
    <div class="im">
      <img src="https://images.unsplash.com/photo-1541596993953-970dd2ffdbdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80" alt="">
    </div>
    <div class="col-3 border border-left-0 border-light">
      <h4 class="mt-3">Welcome</h4>
      <form @submit.prevent="login" class="ml-3 mr-4 mt-4">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input v-model="email" type="email" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input v-model="password" type="password" class="form-control form-control-sm" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary btn-sm">Login</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import axios from '../config/axios'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
  img {
    width: 28rem;
  }
  .col-3 {
    background: white;
    box-shadow: 1px 2px 2px #888888;
  }
  label {
    font-size: 0.8rem;
  }
  .im {
    box-shadow: 1px 2px 2px #888888;
  }
</style>
