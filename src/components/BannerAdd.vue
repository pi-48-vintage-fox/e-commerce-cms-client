<template>
  <div class="container-edit-main flex-col center">

    <!-- <form @submit.prevent="addBanner"> -->
    <h1>Add Banner</h1>
  <form class="container-edit-form flex-col">

    <!-- <label for="title">Banner Name</label> -->
    <vs-input type="text" v-model="title" label="Banner Title" name="title"></vs-input>
    <label for="status">Status</label>
    <select v-model="status" name="status">
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
    </select>
    <div class="flex-row fullwidth">
      <vs-input type="text" v-model="imageUrl" label="Image URL" name="imageUrl"></vs-input>
      <vs-button class="btn" succes @click.prevent="previewUrl = imageUrl">Preview</vs-button>
    </div>
    <img class="image-preview" :src="previewUrl" alt="">

    <!-- <select v-model="BannerCategoryId">
      <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{cat.title}}</option>
    </select> -->

    <div class="flex-row center fullwidth">
      <vs-button flat type="reset">Clear Form</vs-button>
      <vs-button block @click.prevent="addBanner">Add</vs-button>
    </div>
    <!-- </form> -->
  </form>
  </div>
</template>

<script>
export default {
  name: 'BannerAdd',
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
    addBanner () {
      console.log('submit add banner')
      this.$store.dispatch('addBanner', {
        title: this.title,
        status: this.status,
        imageUrl: this.imageUrl
      })
    }
  }

}
</script>

<style>
form {
  display: flex;
  flex-direction: column
}

</style>
