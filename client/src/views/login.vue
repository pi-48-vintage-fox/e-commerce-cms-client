<template>
  <div>
      <div class="container mt-5">
        <h1>cms e-commers</h1>
        <h3>login</h3>
        <div class="row">
            <div class="col-8 mt-3">
                <img :src="img" alt="" height="400px">
            </div>
            <div class="col-3 mt-5">
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input v-model="data.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input v-model="data.password" type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from '../config/axios'
export default {
  name: 'login',
  data () {
    return {
      data: {
        email: '',
        password: ''
      },
      img: 'https://www.komite.id/wp-content/uploads/2020/04/960x0.jpg'
    }
  },
  methods: {
    login () {
      axios({
        url: '/login',
        method: 'POST',
        data: {
          email: this.data.email,
          password: this.data.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('emailIsLogin', this.data.email)
          this.$router.push('/')
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
