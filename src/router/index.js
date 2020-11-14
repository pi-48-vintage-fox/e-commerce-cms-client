import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/add_product',
    name: 'Add Product',
    component: () => import('../views/Add_product.vue')
  },
  {
    path: '/banners',
    name: 'Banners',
    component: () => import('../views/Banner.vue')
  },
  {
    path: '/edit_product',
    name: 'Edit Product',
    component: () => import('../views/Edit_form.vue')
  },
  {
    path: '/addBanner',
    name: 'AddBanner',
    component: () => import('../views/Add_banner.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// nav guard
router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem('access_token')
  if (to.name !== 'Login' && !accessToken) next({ name: 'Login' })
  else if (to.name === 'Login' && accessToken) next({ name: 'Home' })
  else next()
})

export default router
