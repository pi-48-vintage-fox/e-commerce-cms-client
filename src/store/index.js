import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    products: []
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
    },
    addCategory (context, payload) {
      axios({
        method: 'POST',
        url: '/categories',
        headers: { token: localStorage.getItem('token') },
        data: {
          name: payload.name
        }
      })
        .then(() => {
          context.dispatch('getCategories')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCategory (context, payload) {
      axios({
        method: 'DELETE',
        url: '/categories/' + payload,
        headers: { token: localStorage.getItem('token') }
      })
        .then(() => {
          context.dispatch('getCategories')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
