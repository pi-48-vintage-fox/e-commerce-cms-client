<template>
  <div class="register-page mt-5">
    <div class="container">
      <div class="col-6">
      <h3>Register</h3>
        <form @submit.prevent="register">
          <div class="form-group">
            <input v-model="userRegister.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group mt-5">
            <input v-model="userRegister.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary mt-5">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../axios/axiosinstance'
export default {
  name: 'Register',
  data () {
    return {
      userRegister: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register () {
      axios({
        method: 'POST',
        url: '/register',
        data: this.userRegister
      })
        .then(({ data }) => {
          if (data) {
            this.$router.push({ name: 'Login' })
          } else {
            this.$router.push({ name: 'Register' })
          }
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  }
}
</script>

<style>

</style>
