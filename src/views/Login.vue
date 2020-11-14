<template>
    <section id="login-page">
        <div class="bg-video">
            <video src="../assets/Fish on Market.mp4" class="bg-video-content" autoplay muted loop>
            </video>
        </div>
        <div class="center">
            <h1 class="welcome">Welcome To Frish</h1>
            <h5 style="margin-bottom: 3rem;">- Admin's Site -</h5>
            <form @submit.prevent="login">
                <div class="form-group">
                    <input v-model="email_login" id="email" class="form-control" type="email" placeholder="Type your email..">
                </div>
                <div class="form-group">
                    <input v-model="password_login" id="password" class="form-control" type="password" placeholder="Type your password..">
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
            <p style="margin-top: 50px; font-size: 10px; color: black">Created By : Adrian Muhammad Kuncoro</p>
        </div>
    </section>
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
    login () {
      const payload = {
        email: this.email_login,
        password: this.password_login
      }
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style>
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: .6;
}
.bg-video-content {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
#login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
.center {
  /* background-color: rgba(245, 246, 250,.8); */
  /* width: 300px; */
  /* height: 300px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.welcome {
  color: white;
  text-shadow: 2px 5px 10px black;
}
</style>
