import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AddProduct from '../components/AddProduct.vue'
import EditProduct from '../components/EditProduct.vue'
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
    path: '/Add',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/Edit/:id',
    name: 'EditProduct',
    component: EditProduct
  }
  // {
  //   path: '/about',
  // name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && localStorage.getItem('access_token')) next({ name: 'Home' })
  else if (to.path === '/' && !localStorage.getItem('access_token')) next({ name: 'Login' })
  else next()
})

export default router
