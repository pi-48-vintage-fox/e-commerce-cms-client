<template>
  <div class="home">
    <LandingPage v-if="!loggedIn" @toLogin="toLogin"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from '../components/LandingPage'
export default {
  name: 'Home',
  data () {
    return {
      loggedIn: false
    }
  },
  methods: {
    toLogin (status) {
      this.loggedIn = status
    }
  },
  components: {
    LandingPage
  },
  created () {
    if (localStorage.getItem('token')) {
      this.$router.push('/about')
    }
  }
}
</script>
