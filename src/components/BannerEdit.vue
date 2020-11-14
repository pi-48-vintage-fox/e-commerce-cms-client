<template>
  <div class="container-edit-main flex-col center">

    <!-- <form @submit.prevent="editBanner"> -->
    <h1>Edit Banner</h1>
  <form class="container-edit-form flex-col">

    <!-- <label for="title">Banner Name</label> -->
    <vs-input type="text" v-model="title" label="Banner Title" name="title"></vs-input>
    <label for="status">Status</label>
    <select v-model="status" name="status">
      <option value="active">active</option>
      <option value="inactive">inactive</option>
    </select>
    <div class="flex-row fullwidth">
      <vs-input type="text" v-model="imageUrl" label="Image URL" name="imageUrl"></vs-input>
      <vs-button class="btn" succes @click="previewUrl = imageUrl">Preview</vs-button>
    </div>
    <img class="image-preview image-preview-banner" :src="previewUrl" alt="">

    <!-- <select v-model="BannerCategoryId">
      <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{cat.title}}</option>
    </select> -->

    <div class="flex-row center fullwidth">
      <vs-button flat @click.prevent="$router.go(-1)">Cancel</vs-button>
      <vs-button block @click.prevent="editBanner">Update</vs-button>
    </div>
    <!-- </form> -->
  </form>
  </div>
</template>

<script>
export default {
  name: 'BannerEdit',
  computed: {
    // bannerCategories () {
    //   return this.$store.state.bannerCategories
    // }
  },
  data () {
    return {
      title: '',
      status: '',
      imageUrl: '',
      previewUrl: ''
    }
  },

  methods: {
    editBanner () {
      console.log('submit edit banner')
      this.$store.dispatch('editBanner', {
        id: this.$route.params.id,
        title: this.title,
        status: this.status,
        imageUrl: this.imageUrl
        // BannerCategoryId: this.BannerCategoryId
      })
    }
  },
  created () {
    this.$store.dispatch('fetchBannerDetails', this.$route.params.id)
      .then(({ data }) => {
        console.log(data, '<<<<< banner details')
        this.title = data.title
        this.status = data.status
        this.imageUrl = data.imageUrl
        this.previewUrl = data.imageUrl
        // this.BannerCategoryId = data.BannerCategoryId
      })
      .catch(err => {
        console.log(err.response)
        this.$toasted.global.errorMessage(err.response.data.msg)
      })
  }

}
</script>

<style>
form {
  display: flex;
  flex-direction: column
}

.image-preview-banner {
  width: 100%;
  height: auto;
}

.vs-button__content {
  white-space: nowrap;
}

</style>
