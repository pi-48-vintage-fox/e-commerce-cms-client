import Vue from 'vue'
import Cloudinary, { CldImage, CldVideo } from 'cloudinary-vue'

Vue.use(Cloudinary, {
  configuration: { cloudName: 'mochaacloud' },
  components: [CldImage, CldVideo]
})
