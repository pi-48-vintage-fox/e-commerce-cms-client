<template>
  <section>
    <div
      style="display:flex; flex-direction:column; justify-content:center;align-items:center"
    >
      <img
        src="https://static.dribbble.com/users/142857/screenshots/1948344/logo-dark_1x.png"
        alt=""
        class="logo"
      />
      <form>
        <div class="form-group align-item-center">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control align-item-center"
            v-model="email"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group align-item-center">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control align-item-center"
            v-model="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" @click.prevent="login" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import swal from 'sweetalert'
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password
      };
      this.$store
        .dispatch("login", payload)
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token);
          this.$router.push("/");
        })
        .catch(err => {
          const error = err.response.data.message;
          swal('Error', `${error}`, 'error');
        });
    }
  }
};
</script>

<style>
.logo {
  width: 250px;
  height: 200px;
}
</style>
