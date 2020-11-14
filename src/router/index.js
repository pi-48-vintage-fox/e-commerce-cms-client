import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Products from '../components/Products.vue'
import ProductsFiltered from '../components/ProductsFiltered.vue'
import ProductAdd from '../components/ProductAdd.vue'
import ProductEdit from '../components/ProductEdit.vue'
import Categories from '../components/Categories.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: 'products',
        name: 'Products',
        component: Products
      },
      {
        path: 'products/:categoryId',
        name: 'ProductsByCategory',
        component: ProductsFiltered
      },
      {
        path: 'addproduct',
        component: ProductAdd
      },
      {
        path: 'editproduct/:id',
        component: ProductEdit
      },
      {
        path: 'categories',
        component: Categories
      }
    ]
  },
  {
    path: '*',
    component: NotFound
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !localStorage.access_token) next({ name: 'Login' })
  else if (to.path === '/login' && localStorage.access_token) next({ name: 'Products' })
  else next()
})

export default router
