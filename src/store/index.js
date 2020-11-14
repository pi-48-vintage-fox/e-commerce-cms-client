import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../config/axios'
import router from '../router'
import { toCurrencyFormat } from '../../helpers'

import toasted from '../main'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    products: [],
    filteredProducts: [],
    banners: [],
    user: {}
  },
  mutations: {
    SET_USER (state, user) {
      console.log('setting user', user)
      state.user = user
    },

    SET_CATEGORIES (state, categories) {
      state.categories = categories
    },

    SET_PRODUCTS (state, products) {
      state.products = products
    },

    SET_FILTERED_PRODUCTS (state, products) {
      state.filteredProducts = products
    }

  },
  actions: {
    addProduct ({ dispatch }, payload) {
      return axios({
        method: 'POST',
        url: '/products/',
        data: payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data, '<<< result add product')
          dispatch('fetchProducts')
          router.push('/products')
        })
        .catch(err => {
          console.log(err.response.data)
          Vue.toasted.global.errorMessage(err.response.data.msg)
        })
    },
    deleteProduct ({ dispatch }, id) {
      return axios({
        method: 'DELETE',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    editProduct ({ dispatch }, payload) {
      return axios({
        method: 'PUT',
        url: '/products/' + payload.id,
        data: payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data, '<<< result edit product')
          Vue.toasted.global.successMessage(data.msg)
          dispatch('fetchProducts')
          router.push('/products')
        })
        .catch(err => {
          console.log(err.response.data)
          Vue.toasted.global.errorMessage(err.response.data.msg)
        })
    },
    submitLoginForm ({ commit }, payload) {
      return axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchUserDetails ({ commit }) {
      return axios({
        url: '/user',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data, '<<< user data')
          commit('SET_USER', data)
        })
        .catch((err) => {
          console.log("Error fetching user's details:", err)
        })
    },

    fetchCategories ({ commit }) {
      axios({
        method: 'GET',
        url: '/categories',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data, '<<<< categories')
          commit('SET_CATEGORIES', data)
        })
        .catch((err) => {
          console.log(err.response.data)
          Vue.toasted.global.errorMessage(err.response.data.msg)
        })
    },

    fetchProducts ({ commit }) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data, '<<<< products')
          data.forEach(el => {
            el.price = toCurrencyFormat(el.price)
          })
          commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err.response.data)
          Vue.toasted.global.errorMessage(err.response.data.msg)
        })
    },

    fetchCategoryDetails (_, categoryId) {
      console.log('fetch cat details', categoryId)
      return axios({
        method: 'GET',
        url: '/categories/' + categoryId,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },

    fetchProductsByCategory ({ commit }, categoryId) {
      console.log('fetch by cat:', categoryId)
      axios({
        method: 'GET',
        url: '/products?category=' + categoryId,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data, '<<<<< filtered')
          commit('SET_FILTERED_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err.response.data)
          Vue.toasted.global.errorMessage(err.response.data.msg)
        })
    },
    fetchProductDetails (_, id) {
      return axios({
        method: 'GET',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    }
  },
  modules: {
  }
})
