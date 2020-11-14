<template>
  <div class="container" >
    <div class="page-header">
      <i class="fas fa-arrow-left"></i>
      <h2>Appearance</h2>
    </div>
    <div class="card mb-" style="max-width:100%">
      <carousel :per-page="5"
        :autoplay="true"
        :loop="true"
        :centerMode="true"
        :mouse-drag="true">
        <slide v-for="banner in activeBanner" :key='banner.id'>
          <img style="max-width:100%;height:200px" :src="banner.image_url">
        </slide>
      </carousel>
    </div>
    <div class="card mb-1">
      <a href="#" class="btn washed-success mb-1" @click="toggleAddModal">Add new banner</a>
    </div>
    <div class="card" >
      <table class="table">
        <thead>
          <th class="text-left">Banner Name</th>
          <th>Image</th>
          <th>Status</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr v-for="banner in banners" :key='banner.id'>
            <td>
              {{banner.name}}
            </td>
            <td>
              <img :src="banner.image_url" class="banner-list" alt="">
            </td>
            <td>
              <a class="btn washed-primary" v-if="banner.is_active">Active</a>
              <a class="btn washed-warning" v-if="!banner.is_active">Deactive</a>
            </td>
            <td>
              <a href="#" class="btn washed-primary mr-1" @click="editBanner(banner)"><i class="far fa-edit"></i> Edit</a>
              <a href="#" class="btn washed-danger"><i class="far fa-trash-alt"></i> Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Modal title="Add banner" v-if="addModal" @close="toggleAddModal">
      <form>
          <div class="form-input">
            <label for="">Banner Name</label>
            <input type="text" v-model="newBanner.name">
          </div>
          <label for="">Image</label>
          <div class="form-input image-upload">
            <div class="image-preview" v-if="isNewBanner">
              <img :src="newBannerPreview">
            </div>
            <div class="upload-image-btn" @click="uploadImage('add')">
              Upload image
            </div>
          </div>
          <div class="form-input">
            <a href="#" class="btn btn-primary" @click.prevent="insertBanner">Save</a>
          </div>
        </form>
    </Modal>
    <Modal title="Edit banner" v-if="editModal" @close="toggleEditModal">
      <form>
          <div class="form-input">
            <label for="">Banner Name</label>
            <input type="text" v-model="editedBanner.name">
          </div>
          <label for="">Image</label>
          <div class="form-input image-upload">
            <div class="image-preview">
              <img :src="editBannerPreview">
            </div>
            <div class="upload-image-btn" @click="uploadImage('edit')">
              Upload image
            </div>
          </div>
          <div class="form-input" v-if="editedBanner.is_active">
            <a href="#" class="btn washed-warning" @click.prevent="editedBanner.is_active = false">Set Deactive</a>
          </div>
          <div class="form-input" v-if="!editedBanner.is_active">
            <a href="#" class="btn washed-success" @click.prevent="editedBanner.is_active = true ">Set Active</a>
          </div>
          <div class="form-input">
            <a href="#" class="btn btn-primary" @click.prevent="saveBanner">Save</a>
          </div>
        </form>
    </Modal>
  </div>
</template>

<script>
import Modal from '../components/Modal'

export default {
  name: 'AppearancePage',
  components: {
    Modal
  },
  data () {
    return {
      bannerStatus: false,
      isNewBanner: false,
      newBannerPreview: '',
      newBanner: {
        name: '',
        image_url: '',
        is_active: false
      },
      editBannerPreview: '',
      editedBanner: {
        id: 0,
        name: '',
        image_url: '',
        is_active: false
      }
    }
  },
  methods: {
    toggleAddModal () {
      this.$store.commit('TOGGLE_ADD_BANNER_MODAL')
    },
    toggleEditModal () {
      this.$store.commit('TOGGLE_EDIT_BANNER_MODAL')
    },
    uploadImage (origin) {
      window.cloudinary.openUploadWidget(
        {
          cloud_name: 'mochaacloud',
          upload_preset: 'yoqa3uhq'
        },
        (error, result) => {
          if (!error && result && result.event === 'success') {
            if (origin === 'add') {
              this.isNewBanner = true
              this.newBannerPreview = result.info.url
              this.newBanner.image_url = result.info.url
            } else {
              this.editBannerPreview = result.info.url
              this.editedBanner.image_url = result.info.url
            }
          }
        }).open()
    },
    insertBanner () {
      this.$store.dispatch('insertBanner', this.newBanner)
    },
    editBanner (payload) {
      this.toggleEditModal()
      this.editBannerPreview = payload.image_url
      this.editedBanner = payload
    },
    saveBanner () {
      const payload = {
        id: this.editedBanner.id,
        data: {
          name: this.editedBanner.name,
          image_url: this.editedBanner.image_url,
          is_active: this.editedBanner.is_active
        }

      }
      this.$store.dispatch('editBanner', payload)
    }
  },
  computed: {
    banners () {
      return this.$store.state.banners
    },
    activeBanner () {
      return this.$store.state.banners.filter(item => item.is_active)
    },
    addModal () {
      return this.$store.state.addBannerModal
    },
    editModal () {
      return this.$store.state.editBannerModal
    }
  },
  created () {
    this.$store.dispatch('fetchBanners')
  }
}
</script>
