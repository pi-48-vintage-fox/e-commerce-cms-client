import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../axios/axiosInstance'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    banners: [],
    product: {},
    banner: {}
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
    },
    SET_BANNER_BY_ID (state, dataBanner) {
      state.banner = dataBanner
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
          Swal.fire('Signed in successfully')
        })
        .catch(err => {
          Swal.fire(
            'Error!',
            err.response.data.msg,
            'ERROR'
          )
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
          Swal.fire(
            'Error!',
            err.response.data.msg,
            'ERROR'
          )
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
          Swal.fire('Sucessfully Delete Product')
        })
        .catch(err => {
          Swal.fire(
            'Error!',
            err.response.data.msg,
            'ERROR'
          )
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
          Swal.fire('Sucessfully Add Product')
        })
        .catch(err => {
          Swal.fire(
            'Error!',
            err.response.data.msg,
            'ERROR'
          )
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
          Swal.fire('Sucessfully Edit Product')
        })
        .catch(err => {
          Swal.fire(
            'Error!',
            err.response.data.msg,
            'ERROR'
          )
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
          Swal.fire(
            'Error!',
            err.response.data.msg,
            'ERROR'
          )
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
          Swal.fire('Sucessfully Add Banner')
        })
        .catch(err => {
          Swal.fire(
            'Error!',
            err.response.data.msg,
            'ERROR'
          )
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
          Swal.fire('Sucessfully Change Banner Status')
        })
        .catch(err => {
          Swal.fire(
            'Error!',
            err.response.data.msg,
            'ERROR'
          )
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
          Swal.fire('Sucessfully Delete Banner')
        })
        .catch(err => {
          Swal.fire(
            'Error!',
            err.response.data.msg,
            'ERROR'
          )
        })
    },
    editBanner (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        method: 'PUT',
        url: `/banners/${payload.id}`,
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
          Swal.fire('Sucessfully Edit Banner')
        })
        .catch(err => {
          Swal.fire(
            'Error!',
            err.response.data.msg,
            'ERROR'
          )
        })
    }
  },
  modules: {
  }
})
