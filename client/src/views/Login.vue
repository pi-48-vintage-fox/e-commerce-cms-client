<template>
  <div>
    <b-container>
      <b-row class="justify-content-md-center">
        <b-form>
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Password:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.password"
              type="password"
              required
              placeholder="Enter passwod"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary" @click.prevent="login">Submit</b-button>
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
      }
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
          this.form.email = ''
          this.form.password = ''
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err.response, 'ini error login')
          this.form.email = ''
          this.form.password = ''
        })
    }
  }
}
</script>
