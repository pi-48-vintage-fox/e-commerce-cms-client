import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import AddProduct from '../views/AddProduct.vue'
import EditProduct from '../views/EditProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/addproduct',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/editProduct',
    name: 'EditProduct',
    component: EditProduct
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL || 'https://localhost/3000',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !localStorage.access_token)next({ name: 'Login' })
  else if (to.path === '/login' && localStorage.access_token)next({ name: 'Home' })
  else next()
})

export default router
