import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    idProduct: 0
  },
  mutations: {
    FETCH_PRODUCTS (state, payload) {
      state.products = payload
    },
    ID_FOR_EDIT (state, payload) {
      state.idProduct = +payload
    }
  },
  actions: {
    loginAdmin (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: payload
      })
        .then(response => {
          // console.log(response.data)
          localStorage.setItem('access_token', response.data.access_token)
          localStorage.setItem('name', response.data.name)
          router.push({ path: '/admin' })
        })
        .catch(err => console.log(err))
    },
    fetchProducts (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(response => {
          context.commit('FETCH_PRODUCTS', response.data)
        })
        .catch(err => console.log(err))
    },
    addProduct (context, payload) {
      // console.log(context)
      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
        .then(response => {
          context.dispatch('fetchProducts')
        })
        .catch(err => console.log(err))
    },
    deleteProduct (context, payload) {
      axios({
        method: 'DELETE',
        url: `/products/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(response => {
          context.dispatch('fetchProducts')
        })
        .catch(err => console.log(err))
    },
    editProduct (context, payload) {
      axios({
        method: 'PUT',
        url: `/products/${payload.id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: payload.data
      })
        .then(response => {
          context.dispatch('fetchProducts')
          router.push({ path: '/admin/products' })
        })
        .catch(err => console.log(err))
    }
  },
  getters: {
    populateData (state, getters) {
      return state.products.find(e => e.id === +state.idProduct)
    }
  },
  modules: {
  }
})
