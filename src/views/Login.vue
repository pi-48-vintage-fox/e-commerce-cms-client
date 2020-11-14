<template>
  <div class="container">
    <div class="card">
      <img class="card-img-top" src="holder.js/100x180/" alt="" />
      <div class="card-body">
        <h4 class="card-title">Login</h4>
        <form action="" @submit.prevent="loginAdmin">
          <div class="form-group">
            <label for="">Email</label> <br />
            <input
              type="text"
              name=""
              id=""
              class="form-control"
              placeholder=""
              aria-describedby="helpId"
              v-model="email_login"
            />
            <br />
          </div>
          <div class="form-group">
            <label for="">Password</label> <br />
            <input
              type="password"
              name=""
              id=""
              class="form-control"
              placeholder=""
              aria-describedby="helpId"
              v-model="password_login"
            />
            <br />
          </div>
          <button class="btn btn-primary" type="submit">submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email_login: '',
      password_login: ''
    }
  },
  methods: {
    loginAdmin () {
      const payload = {
        email: this.email_login,
        password: this.password_login
      }
      this.$store.dispatch('loginAdmin', payload)
      this.email_login = ''
      this.password_login = ''
    }
  }
}
</script>

<style></style>
