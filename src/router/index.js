import Vue from 'vue'
import Router from 'vue-router'

// Lazy loading components
const Login = () => import('../pages/LoginPage.vue')
const Homepage = () => import('../pages/MainPage.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login,
      beforeEnter (to, from, next) {
        if (localStorage.access_token) {
          next('/dashboard')
        } else {
          next()
        }
      }
    },
    {
      path: '/dashboard',
      component: Homepage,
      children: [
        { path: '/products', component: () => import('../pages/ProductsPage') },
        { path: '/appearance', component: () => import('../pages/Appearance.vue') }
      ],
      beforeEnter (to, from, next) {
        if (localStorage.access_token) {
          next()
        } else {
          next('/')
        }
      }
    }
  ],
  linkActiveClass: 'active'
})
