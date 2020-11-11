import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

// Lazy loading components
const Login = () => import('../pages/LoginPage.vue')
const Homepage = () => import('../pages/MainPage.vue')
const Products = () => import('../components/Products')
Vue.use(Router)

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}
const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/dashboard')
}

export default new Router({
  routes: [
    {
      path: '/',
      component: Login,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/dashboard',
      component: Homepage,
      children: [
        { path: '/products', component: Products }
      ],
      beforeEnter: ifAuthenticated
    }
  ]
})
