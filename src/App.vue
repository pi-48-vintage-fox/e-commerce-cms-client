<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './views/Home'
// import Landing from './views/Landing'

export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    // Home,
    // Landing
  },

  methods: {
    changePage (page) {
      console.log('change page to', page)
      this.page = page
      console.log('current page:', this.page)
    },
    showMessage (options) {
      let { msg, type } = options
      console.log({ msg, options })

      if (!options.duration) options.duration = 8000
      if (!options.toast) options.toast = true
      if (!options.progressBar) options.progressBar = true

      if (Array.isArray(msg)) {
        msg = msg.join(', ')
      } else {
        if (msg.response) {
          // error dari axios
          msg = msg.response.data.msg
        } else if (msg.responseJSON) {
          msg = msg.responseJSON.message
        } else if (msg.message) {
          msg = msg.message
        } else if (msg.statusText) {
          msg = msg.statusText
        }
      }

      if (options.toast) {
        switch (type) {
          case 'success':
            this.$toasted.global.successMessage({
              message: msg
            })
            break
          case 'info':
            this.$toasted.global.infoMessage({
              message: msg
            })
            break
          case 'error':
            this.$toasted.global.errorMessage({
              message: msg
            })
            break
          default:
            this.$toasted.global.infoMessage({
              message: msg
            })
            break
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
