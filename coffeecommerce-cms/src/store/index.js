import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    filtered: []
  },
  mutations: {
    SET_PRODUCTS (state, productLists) {
      state.products = productLists
    },
    FILTER_PRODUCT (state, productData) {
      state.filtered = productData
    }
  },
  actions: {
    fetchProducts (context, payload) {
      // linter mengatakan access token harus dalam camel case
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/products',
        headers: { accessToken }
      })
        .then(({ data }) => {
          console.log(data, 'fetch')
          context.commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    filterProduct (context, payload) {
      // linter mengatakan access token harus dalam camel case
      const accessToken = localStorage.getItem('access_token')

      axios({
        method: 'GET',
        url: `/products/filter/${payload.product.id}`,
        headers: { accessToken }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('FILTER_PRODUCT', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct ({ dispatch }, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'DELETE',
        url: `/products/+${payload.id}`,
        headers: { accessToken }
      })
        .then(({ data }) => {
          dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct ({ dispatch }, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        method: 'POST',
        url: '/products/addproduct',
        headers: { accessToken },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    editProduct ({ dispatch }, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        method: 'PUT',
        url: `/products/${payload.id}`,
        headers: { accessToken },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, payload) {
      return axios({
        method: 'POST',
        url: '/users/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          console.log(data.access_token)
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('username', data.name)
          localStorage.setItem('role', data.role)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
