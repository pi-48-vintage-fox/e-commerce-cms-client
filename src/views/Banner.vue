<template>
<div>
  <Navbar/>
  <button class="btn btn-success font-weight-bolder" style="margin-bottom: 30px; width: 30%" @click="addBanner">Add Banner</button>
  <div id="select-banner" class="container col-10">
    <BannerCard v-for="banner in $store.state.banners" :key="banner.id" :banner="banner" style="margin-bottom:50px"></BannerCard>
  </div>
</div>
</template>

<script>
import BannerCard from '../components/Banner_card.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Banner',
  components: {
    BannerCard,
    Navbar
  },
  methods: {
    addBanner () {
      this.$router.push('/addBanner')
    }
  },
  created () {
    this.$store.dispatch('fetchBanners')
  }
}
</script>

<style>

</style>
