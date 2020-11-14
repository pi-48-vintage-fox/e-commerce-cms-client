import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueToastify from 'vue-toastify'
import money from 'v-money'
import VueTheMask from 'vue-the-mask'
import './cloudinary.js'
import VueCarousel from 'vue-carousel'

Vue.use(VueCarousel)

Vue.use(VueTheMask)
Vue.use(money, {
  precision: 0,
  prefix: 'Rp. '
})
Vue.use(VueToastify, {
  theme: 'light',
  position: 'top-center'
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
})
