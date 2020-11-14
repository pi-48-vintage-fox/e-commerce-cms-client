<template>
<div>
  <Navbar/>
  <div id="add-form">
    <form class="container justify-content-center col-6" @submit.prevent="addBanner">
      <h3 class="text-center">Add Banner</h3>
      <div class="form-group">
          <label for="exampleFormControlInput1">Title</label>
          <input type="text" class="form-control" id="add_name" v-model="title">
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Image URL</label>
        <input type="text" class="form-control" id="add_image_url" v-model="image_url">
      </div>
      <button type="submit" class="btn btn-dark" style="width: 100%">Add Banner</button>
    </form>
  </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'AddBanner',
  data () {
    return {
      title: '',
      image_url: ''
    }
  },
  components: {
    Navbar
  },
  methods: {
    addBanner () {
      const payload = {
        title: this.title,
        image_url: this.image_url
      }
      this.$store.dispatch('addBanner', payload)
        .then(() => {
          this.$router.push('/banners')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
