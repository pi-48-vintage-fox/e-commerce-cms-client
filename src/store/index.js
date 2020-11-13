import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../config/axios'
import router from '../router'
import { toCurrencyFormat } from '../../helpers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    products: [],
    banners: [],
    user: {}
  },
  mutations: {
    setUser (state, user) {
      console.log('setting user', user)
      state.user = user
    },

    setCategories (state, categories) {
      state.categories = categories
    },

    setProducts (state, products) {
      state.products = products
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
          console.log(err)
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
        .then((result) => {
          console.log(result, '<<< result delete product')
          dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err, '<<< err delete product')
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
          dispatch('fetchProducts')
          router.push('/products')
        })
        .catch(err => {
          console.log(err)
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
          commit('setUser', data)
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
          commit('setCategories', data)
        })
        .catch((err) => {
          console.log(err)
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
          commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
          this.$emit('showMessage', {
            msg: err,
            type: 'error'
          })
        })
    },
    fetchProductDetails ({ commit }, id) {
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
