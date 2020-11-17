<template>
  <div>
      <Navbar/>
      <div class="row">
          <div class="col-4 sidebarli">
              <ul>
                <a href="#" >View </a>
                <a href="#" >|| Add</a>
                <a href="#" >|| Update</a>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'Banner',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
