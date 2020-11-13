<template>
  <div class="container">
    <div class="d-flex justify-content-center h-100">
      <div class="card mt-5" >
        <div class="card-header">
          <h3>Sign In</h3>
          <div class="d-flex justify-content-end social_icon">
            <span><i class="fab fa-facebook-square"></i></span>
            <span><i class="fab fa-google-plus-square"></i></span>
            <span><i class="fab fa-twitter-square"></i></span>
          </div>
        </div>
        <div class="card-body">
          <LoginForm></LoginForm>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-center links">
            Don't have an account?<a href="#">Sign Up</a>
          </div>
          <div class="d-flex justify-content-center">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm'
export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>

<style scoped>
</style>
