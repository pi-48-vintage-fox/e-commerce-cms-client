<template>
<div>
  <Navbar/>
  <div class="home">
    <Homepage></Homepage>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import Homepage from '@/components/Homepage.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Home',
  components: {
    Homepage,
    Navbar
  }
}
</script>
