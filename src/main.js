import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax'
import Toasted from 'vue-toasted'
import store from './store'

import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'

Vue.use(Toasted, {
  router,
  duration: 8000,
  theme: 'bubble'
})

Vue.use(Vuesax, {
  colors: {
    primary: '#5b3cc4',
    success: 'rgb(23, 201, 100)',
    danger: 'rgb(242, 19, 93)',
    warn: 'rgb(255, 130, 0)',
    dark: 'rgb(36, 33, 69)'
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.toasted.register('errorMessage', payload => {
  return payload.message
}, {
  type: 'error',
  icon: 'error_outline'
})
Vue.toasted.register('successMessage', payload => {
  return payload.message
}, {
  type: 'success',
  icon: 'check_circle_outline'
})
Vue.toasted.register('infoMessage', payload => {
  return payload.message
}, {
  type: 'info',
  icon: 'info'
})
