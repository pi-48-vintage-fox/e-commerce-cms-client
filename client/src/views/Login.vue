<template>
  <div>
    <b-container>
      <b-row class="justify-content-md-center mt-5">
        <b-form class="form-login shadow-lg rounded">
          <div class="text mt-4">
              <span> Welcome Back to KopiBiji </span>
          </div>
          <b-form-group
            class="form-email"
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
            <p class="errMsg">{{errorMsg}}</p>
          </b-form-group>
          <b-form-group class="form-password" label="Your Password:">
            <b-form-input
              id="input-2"
              v-model="form.password"
              type="password"
              required
              placeholder="Enter passwod"
            ></b-form-input>
            <p class="errMsg">{{errorMsg}}</p>
          </b-form-group>
          <b-button
            type="submit"
            variant="primary"
            class="button mt-3"
            @click.prevent="login">Sign In</b-button>
        </b-form>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      errorMsg: ''
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.form.email,
        password: this.form.password
      }
      console.log(payload.password)
      this.$store.dispatch('login', payload)
        .then(({ data }) => {
          console.log('ini sukses login')
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('username', data.username)
          this.form.email = ''
          this.form.password = ''
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err.response, 'ini error login')
          this.errorMsg = err.response.data.msg
          this.form.email = ''
          this.form.password = ''
        })
    }
  }
}
</script>
<style>
.form-login {
  margin-top: 80px;
  height: 500px;
  width: 500px;
  background-image: url('https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80');
  background-size: cover;
}
.form-email {
  width: 80%;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  text-align: justify
}
.form-password {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-align: justify
}
.text span {
  font-size: 30px;
}
.button {
  width: 80%
}
.errMsg {
  color: red
}
</style>
