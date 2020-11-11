<template>
  <div>
      <div class="row">
          <div class="col-sm-2" id="admin">
            <div class="router-products">
                <router-link to="/admin/products" class="list-unstyled text-decoration-none text-dark h4">Products</router-link>
            </div>
            <div class="router-orders py-5">
                <router-link to="/admin/orders" class="list-unstyled text-decoration-none text-dark h4">Orders</router-link>
            </div>
            <button class="btn btn-danger" type="button" @click="logout">Logout</button>
          </div>
          <div class="col">
            <router-view/>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Admin',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push({ path: '/login' })
    },
    productPage () {
      this.$router.push({ path: '/admin/products' })
    }
  },
  components: {
  }
}
</script>

<style>
    #admin {
        height: 100vh;
        border-right: 1px solid black;
    }
</style>
