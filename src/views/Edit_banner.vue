<template>
<div>
  <Navbar/>
  <div id="add-form">
    <form class="container justify-content-center col-6" @submit.prevent="editBanner">
      <h3 class="text-center mb-5" style="margin-top: 80px">Edit Banner</h3>
      <div class="form-group">
          <label for="exampleFormControlInput1">Title</label>
          <input type="text" class="form-control" id="edit_name" :placeholder="bannerToEdit.title" v-model="bannerToEdit.title">
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Image URL</label>
        <input type="text" class="form-control" id="edit_image_url" :placeholder="bannerToEdit.image_url" v-model="bannerToEdit.image_url">
      </div>
      <button type="submit" class="btn btn-dark" style="width: 100%">Edit Banner</button>
    </form>
  </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Swal from 'sweetalert2'
export default {
  name: 'EditBanner',
  components: {
    Navbar
  },
  methods: {
    editBanner () {
      const payload = this.bannerToEdit
      this.$store.dispatch('editBanner', payload)
        .then(() => {
          this.$router.push('/banners')
        })
        .catch(err => {
          Swal.fire(
            'Error!',
            err.response.data.msg,
            'ERROR'
          )
        })
    }
  },
  computed: {
    bannerToEdit () {
      return this.$store.state.banner
    }
  }
}
</script>

<style>

</style>
