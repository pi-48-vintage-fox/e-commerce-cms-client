import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Products from '../components/Products.vue'
import ProductsFiltered from '../components/ProductsFiltered.vue'
import ProductAdd from '../components/ProductAdd.vue'
import ProductEdit from '../components/ProductEdit.vue'
import Banners from '../components/Banners.vue'
import BannerAdd from '../components/BannerAdd.vue'
import BannerEdit from '../components/BannerEdit.vue'
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
        path: 'products/add',
        name: 'ProductAdd',
        component: ProductAdd
      },
      {
        path: 'products/edit/:id',
        name: 'ProductEdit',
        component: ProductEdit
      },
      {
        path: 'products/:categoryId',
        name: 'ProductsByCategory',
        component: ProductsFiltered
      },
      {
        path: 'categories',
        component: Categories
      },
      {
        path: 'banners',
        name: 'Banners',
        component: Banners
      },
      {
        path: 'banners/add',
        name: 'BannerAdd',
        component: BannerAdd
      },
      {
        path: 'banners/edit/:id',
        name: 'BannerEdit',
        component: BannerEdit
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

// To silence NavigationDuplicated error
function patchRouterMethod (router, methodName) {
  router['old' + methodName] = router[methodName]
  router[methodName] = async function (location) {
    return router['old' + methodName](location).catch((error) => {
      if (error.name === 'NavigationDuplicated') {
        return this.currentRoute
      }
      throw error
    })
  }
}

patchRouterMethod(router, 'push')
patchRouterMethod(router, 'replace')

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !localStorage.access_token) next({ name: 'Login' })
  else if (to.path === '/login' && localStorage.access_token) next({ name: 'Products' })
  else if (to.path === '/') next({ name: 'Products' })
  else next()
})

export default router
