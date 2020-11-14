<template>
  <section id="login-page" class="container al-cnt">
    <div class="d-flex justify-content-center" style="margin: 100px">
      <div class="bg-dark px-5" style="border-radius: 5px">
        <form class="form-signin text-center mt-4" @submit.prevent="login">
          <img
            class="mb-4"
            src="../assets/logo-web.svg"
            alt="Logo"
            width="72"
            height="72"
          />
          <h1 class="h3 mb-3 font-weight-normal text-light">Login to OnCom</h1>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            v-model="email"
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
          />
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            v-model="password"
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
          />
          <button
            class="btn btn-lg btn-outline-light btn-block mt-3"
            type="submit"
          >
            Login
          </button>
          <div class="mt-2">
            <div
              class="g-signin2"
              data-width="300"
              data-longtitle="true"
              data-onsuccess="onSignIn"
            ></div>
          </div>
          <p id="login-err-msg"></p>
          <p class="mt-5 text-muted">&copy; RizkyAkhid</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
// import Swal from 'sweetalert2'
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
      const obj = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', obj)
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
