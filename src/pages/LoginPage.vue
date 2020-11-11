<template>
  <div class="container-center">
    <div class="card card-login">
      <div class="card-header">
        <img src="/assets/svg/login-bunny.svg" class='login-illustration'>
      </div>
      <div class="card-body">
        <div class="card-body-label">
          <h3>Login to your account</h3>
        </div>
        <div class="form-input">
          <input type="email" name="email" id="email" placeholder="Email">
        </div>
        <div class="form-input">
          <input type="password" name="email" id="email" placeholder="Password">
        </div>
        <div class="form-input">
          <a href="#" class="btn btn-primary text-center btn-lg">LOGIN</a>
        </div>
      </div>
    </div>
    <p class="author">Created by Mochamad Zulfikar</p>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  props: {
    msg: String
  }
}
</script>
