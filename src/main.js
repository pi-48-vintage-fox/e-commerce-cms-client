import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
})
