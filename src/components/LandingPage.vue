<template>
  <div class="container-float landing-body">
    <div class="landing-card">
      <h1 class="display-1">Login</h1>
      <div class="row">
        <div class="col-12">
          <form action="#" @submit.prevent="login">
            <div class="form-group">
              <label for="email">Email: </label>
              <input
                type="email"
                v-model="loginPayload.email"
                id="login-email"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="password">Password: </label>
              <input
                type="password"
                v-model="loginPayload.password"
                id="login-password"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <button class="btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'LandingPage',
  data () {
    return {
      card: 'login',
      loginPayload: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const { email, password } = this.loginPayload
      this.$store
        .dispatch('login', { email, password })
        .then((result) => {
          localStorage.setItem('token', result.data.token)
          localStorage.setItem('user', result.data.email)
          this.$store.commit('isLogin', true)
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
          this.$router.push('/')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message + '!'
          })
        })
    }
  },
  props: []
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  margin-top: 10px;
  background-color: #2c3e50;
  color: #42b983;
}

.btn:hover {
  background-color: #42b983;
  color: #2c3e50;
}

.display-1 {
  margin-top: 40px;
}

.landing-body {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.landing-card {
  background-color: #42b983;
  box-shadow: 1px 1px 15px 5px rgba(0, 0, 0, 0.65);
  margin: 20px;
  padding: 20px 5em;
  width: 30%;
}

.row {
  margin-top: 3em;
}
</style>
