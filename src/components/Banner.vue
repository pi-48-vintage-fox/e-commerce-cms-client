<template>
  <div>
    <div class="banner">
      <div class="col-1">
        <div class="banner-property banner-num">
          {{ no }}
        </div>
      </div>
      <div class="col-5">
        <div class="banner-property banner-image">
          <img id="banner-image" :src="banner.image_url" />
        </div>
      </div>
      <div class="col-3">
        <div class="banner-property banner-name">{{ banner.title }}</div>
      </div>
      <div class="col-1">
        <div class="banner-property banner-status" id="banner-status">
          <a
            href="#"
            v-if="banner.status === 'Active'"
            @click.prevent="statusInactive"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-eye-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
              />
            </svg>
          </a>
          <a
            href="#"
            v-else-if="banner.status === 'Inactive'"
            @click.prevent="statusActive"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-eye-slash-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"
              />
              <path
                d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829z"
              />
              <path
                fill-rule="evenodd"
                d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="col-1" @click="editBanner">
        <button class="btn">
          <svg
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            class="icon bi bi-pencil-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
            />
          </svg>
        </button>
      </div>
      <div class="col-1">
        <button class="btn" @click="deleteBanner">
          <svg
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            class="icon bi bi-trash-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Banner',
  data () {
    return {
      editBannerPayload: {
        id: ''
      }
    }
  },
  methods: {
    statusActive () {
      this.$store.dispatch('changeBannerStatus', {
        id: this.banner.id,
        status: 'Active'
      })
    },
    statusInactive () {
      this.$store.dispatch('changeBannerStatus', {
        id: this.banner.id,
        status: 'Inactive'
      })
    },
    deleteBanner () {
      if (this.$store.state.loggedIn) {
        Swal.fire({
          title: 'Are you sure?',
          showCancelButton: true,
          confirmButtonText: 'Delete'
        })
          .then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Deleted!', '', 'success')
              return this.$store.dispatch('deleteBanner', this.banner.id)
            }
          })
          .then(() => {
            this.$store.dispatch('getBanners')
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        Swal.fire('Please login first')
      }
    },
    editBanner () {
      if (this.$store.state.loggedIn) {
        Swal.fire({
          title: 'Enter banner title !',
          input: 'text',
          inputLabel: 'Banner title',
          inputValue: this.banner.title,
          showCancelButton: true,
          inputValidator: (value) => {
            if (!value) {
              return 'You need to write something!'
            }
          }
        })
          .then((result) => {
            this.editBannerPayload.title = result.value
            if (result.isConfirmed) {
              Swal.fire({
                title: 'Enter banner image_url !',
                input: 'text',
                inputLabel: 'Banner image',
                inputValue: this.banner.image_url,
                showCancelButton: true,
                inputValidator: (value) => {
                  if (!value) {
                    return 'You need to write something!'
                  }
                }
              })
                .then((result) => {
                  if (result) {
                    this.editBannerPayload.image_url = result.value
                    this.editBannerPayload.status = this.banner.status
                  }
                  if (result.isConfirmed) {
                    return this.$store.dispatch('editBanner', this.editBannerPayload)
                  }
                })
                .then(() => {
                  this.$store.dispatch('getBanners')
                })
                .catch((err) => {
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.response.data.message + '!'
                  })
                })
            }
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        Swal.fire('Please login first')
      }
    }
  },
  props: ['banner', 'counter'],
  computed: {
    no () {
      return this.counter + 1
    }
  },
  created () {
    this.editBannerPayload.id = this.banner.id
  }
}
</script>

<style scoped>
#banner-image {
  border-radius: 5px;
  width: 100%;
  height: auto;
}

.icon:hover {
  color: #42b983;
  transition: 300ms;
}

a {
  color: #42b983;
  text-decoration: none;
}

a:hover {
  color: #36966b;
  transition: 300ms;
}

.banner {
  align-items: center;
  background-color: #006666;
  display: flex;
  font-size: 2em;
  justify-content: space-around;
  margin: 10px;
  padding: 10px;
  width: 100%;
}

.banner-property {
  font-size: 2rem !important;
  color: #42b983;
}
</style>
