<template>
  <div class="card">
    <img :src="banner.image_url" class="card-img-top rounded-top" style="height: 40vh;">
    <div class="card-body" style="background-color: #eff1ee; opacity: 0.8;">
        <h5 class="card-title font-weight-bold">{{banner.title}}</h5>
        <p>Status : {{banner.status}} </p>
        <a href="#" class="btn btn-primary" @click="changeStatus" style="margin-right: 10px;">Change Status</a>
        <svg @click="deleteBanner" width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
        </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerCard',
  props: ['banner'],
  methods: {
    changeStatus () {
      const payload = {
        id: this.banner.id
      }
      this.$store.dispatch('changeStatus', payload)
    },
    deleteBanner () {
      const payload = {
        id: this.banner.id
      }
      this.$store.dispatch('deleteBanner', payload)
    }
  }
}
</script>

<style>

</style>
