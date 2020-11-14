import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/LoginForm.vue'
import Product from '../views/Product'
import addProduct from '../views/AddProduct'
import editProduct from '../views/EditProduct'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Product',
    name: 'Product',
    component: Product
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/addProduct',
    name: 'addProduct',
    component: addProduct
  },
  {
    path: '/editProduct/:id',
    name: 'editProduct',
    component: editProduct
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && localStorage.access_token) next({ path: '/Product' })
  else if (to.path === '/') next({ name: 'Login' })
  else if (to.path === '/Product' && !localStorage.access_token) next({ name: 'Login' })
  else next()
})

export default router
