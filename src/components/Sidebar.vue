<template>
  <div class="sidebar-container">
    <div class="sidebar-header">
      <img src="/assets/svg/dashboard-bunny.svg">
      <h3>BunnyStore</h3>
      <p>Admin Panel</p>
    </div>
    <div class="sidebar-nav">
      <div class="nav-items">
        <router-link to="/products" class="nav-item">
          <div class="nav-icon">
            <i class="fas fa-boxes"></i>
          </div>
          <div class="nav-label">
            Products
          </div>
        </router-link>
        <router-link to="/appearance" class="nav-item">
          <div class="nav-icon">
            <i class="fas fa-columns"></i>
          </div>
          <div class="nav-label">
            Appearance
          </div>
        </router-link>
      </div>
    </div>
    <div class="sidebar-footer">
      <div class="nav-items">
        <div class="nav-item">
          <div class="nav-icon">
            <i class="fas fa-sign-out-alt"></i>
          </div>
          <div class="nav-label" @click="logout">
            Log Out
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    logout () {
      this.$store.commit('LOGOUT')
      this.$router.push('/')
      this.$vToastify.warning('Byeee :(', 'sad..')
    }
  }
}
</script>
