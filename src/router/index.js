import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AddProduct from '../views/AddProduct.vue'
import EditProduct from '../views/EditProduct.vue'

Vue.use(VueRouter)

const routes = [{
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
  name: 'Login',
  component: Login
},
{
  path: '/addProduct',
  name: 'AddProduct',
  component: AddProduct
},
{
  path: '/editProduct/:id',
  name: 'EditProduct',
  component: EditProduct
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('access_token')

  if (token && to.path === '/login') {
    next({
      name: 'Home'
    })
  } else if (!token && to.path === '/') {
    next({
      name: 'Login'
    })
  } else next()
})

export default router
