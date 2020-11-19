import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    products: [],
    banners: [],
    editProductValue: {},
    categories: ''
  },
  mutations: {
    isLogin (state, payload) {
      state.loggedIn = payload
    },
    insertProducts (state, payloads) {
      state.products = payloads
    },
    insertCategories (state, payloads) {
      state.categories = payloads
    },
    insertBanners (state, payloads) {
      state.banners = payloads
    },
    insertEditProductValue (state, payloads) {
      state.editProductValue = payloads
    }
  },
  actions: {
    login (context, payload) {
      return axios({
        method: 'POST',
        url: '/adminLogin',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    logout (context) {
      localStorage.clear()
      context.commit('isLogin', false)
    },
    getProducts (context) {
      axios({
        method: 'GET',
        url: '/products'
      })
        .then(result => {
          context.commit('insertProducts', result.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getCategories (context) {
      axios({
        method: 'GET',
        url: '/categories'
      })
        .then(result => {
          context.commit('insertCategories', result.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getBanners (context) {
      axios({
        method: 'GET',
        url: '/banners'
      })
        .then(result => {
          context.commit('insertBanners', result.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addCategory (context, payload) {
      return axios({
        method: 'POST',
        url: '/categories',
        headers: { token: localStorage.getItem('token') },
        data: {
          name: payload.name
        }
      })
    },
    addProduct (context, payload) {
      return axios({
        method: 'POST',
        url: '/products',
        headers: { token: localStorage.getItem('token') },
        data: {
          image_url: payload.image_url,
          name: payload.name,
          price: payload.price,
          stock: payload.stock,
          CategoryId: payload.CategoryId
        }
      })
    },
    addBanner (context, payload) {
      axios({
        method: 'POST',
        url: '/banners',
        headers: { token: localStorage.getItem('token') },
        data: {
          title: payload.title,
          image_url: payload.image_url
        }
      })
        .then(() => {
          context.dispatch('getBanners')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCategory (context, payload) {
      return axios({
        method: 'DELETE',
        url: '/categories/' + payload,
        headers: { token: localStorage.getItem('token') }
      })
    },
    deleteBanner (context, id) {
      axios({
        method: 'DELETE',
        url: '/banners/' + id,
        headers: { token: localStorage.getItem('token') }
      })
        .then(() => {
          context.dispatch('getBanners')
        })
        .catch(err => {
          console.log(err)
        })
    },
    changeBannerStatus (context, payload) {
      axios({
        method: 'PATCH',
        url: '/banners/' + payload.id,
        headers: { token: localStorage.getItem('token') },
        data: {
          status: payload.status
        }
      })
        .then(() => {
          context.dispatch('getBanners')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, id) {
      return axios({
        method: 'DELETE',
        url: '/products/' + id,
        headers: { token: localStorage.getItem('token') }
      })
    },
    editProduct (context, payload) {
      return axios({
        method: 'PUT',
        url: '/products/' + payload.id,
        headers: { token: localStorage.getItem('token') },
        data: {
          image_url: payload.image_url,
          name: payload.name,
          price: payload.price,
          stock: payload.stock,
          CategoryId: payload.CategoryId
        }
      })
    },
    editBanner (context, payload) {
      return axios({
        method: 'PUT',
        url: '/banners/' + payload.id,
        headers: { token: localStorage.getItem('token') },
        data: {
          image_url: payload.image_url,
          title: payload.title,
          status: payload.status
        }
      })
    }
  },
  modules: {
  }
})
