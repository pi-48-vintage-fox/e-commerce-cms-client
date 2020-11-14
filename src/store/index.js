import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../axios/axiosInstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    banners: [],
    product: {}
  },
  mutations: {
    SET_PRODUCTS (state, dataProducts) {
      state.products = dataProducts
    },
    SET_PRODUCT_BY_ID (state, dataProduct) {
      state.product = dataProduct
    },
    SET_BANNERS (state, dataBanners) {
      state.banners = dataBanners
    }
  },
  actions: {
    login (context, payload) {
      return axios({
        method: 'POST',
        url: '/admin/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProducts (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: accessToken
        }
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'DELETE',
        url: `/products/${payload.id}`,
        headers: {
          access_token: accessToken
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: accessToken
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    editProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        method: 'PUT',
        url: `/products/${payload.id}`,
        headers: {
          access_token: accessToken
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchBanners (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/banners',
        headers: {
          access_token: accessToken
        }
      })
        .then(({ data }) => {
          context.commit('SET_BANNERS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addBanner (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        method: 'POST',
        url: '/banners',
        headers: {
          access_token: accessToken
        },
        data: {
          title: payload.title,
          image_url: payload.image_url
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchBanners')
        })
        .catch(err => {
          console.log(err)
        })
    },
    changeStatus (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        method: 'PATCH',
        url: `/banners/${payload.id}`,
        headers: {
          access_token: accessToken
        }
      })
        .then(() => {
          context.dispatch('fetchBanners')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteBanner (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'DELETE',
        url: `/banners/${payload.id}`,
        headers: {
          access_token: accessToken
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchBanners')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
