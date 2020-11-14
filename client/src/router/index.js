import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import Category from '../components/Category.vue'
import AddProduct from '../components/AddProduct.vue'
import UpdateProduct from '../components/UpdateProduct.vue'
import ProductCategory from '../components/ProductCategory.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/addproduct',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/updateproduct/:id',
    name: 'updateProduct',
    component: UpdateProduct
  },
  {
    path: '/productcategory/:id',
    name: 'ProductCategory',
    component: ProductCategory
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // udah ada token mau ke /login harus diarahin ke home
  // kalo blm ada token mau ke home, langsung diarahin ke login
  // kalo udh ada token dan bukan ke login, langsung ke router tujuan

  if (to.path === '/login' && localStorage.getItem('access_token')) next({ name: 'Home' })
  else if (to.path === '/' && !localStorage.getItem('access_token')) next({ name: 'login' })
  else next()

  // if (to.path !== '/' && !localStorage.access_token) next({ name: 'Home' })
  // else if (to.path === '/' && localStorage.access_token) next({ name: 'Dashboard' })
  // else next()
})
export default router
