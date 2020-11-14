<template>
  <div>
    <form @submit.prevent="login" class="box p-3">
      <h1>Login</h1>
      <p class="text-muted">Please enter your login and password!</p>
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <p class="text-muted">Only Admin can login to this page</p>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
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
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          localStorage.email = data.email
          localStorage.id = data.id
          this.$store.dispatch('fetchProducts')
          this.$router.push('/')
        })
        .catch(err => {
          this.$swal(
            'ERROR',
            err.response.data.msg,
            'error'
          )
        })
    }
  }
}
</script>

<style>
.box {
  background: #191919;
  text-align: center;
  transition: 0.25s;
  max-width: 400px;
  border-radius: 20px;
  margin: 3rem auto;
  max-height: 500px;
  overflow: auto;
  box-shadow: 10px 10px 36px -14px rgba(255,255,255,1);
}

.box input[type="email"],
.box input[type="password"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 10px 10px;
  width: 250px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
}

.box h1 {
  color: white;
  text-transform: uppercase;
  font-weight: 500;
}

.box input[type="email"]:focus,
.box input[type="password"]:focus {
  width: 300px;
  border-color: #2ecc71;
}

.box button[type="submit"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
}

.box button[type="submit"]:hover {
  background: #2ecc71;
}
</style>
