import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {}
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload.products
      console.log(payload.products, 'ini dimutasi')
    },
    setProductById (state, payload) {
      state.product = payload
    }
  },
  actions: {
    login (context, payload) {
      console.log(payload)
      return axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchProducts (context, payload) {
      return axios({
        url: '/products',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data, 'ini di store<?')
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    addProduct (context, payload) {
      return axios({
        url: '/products',
        method: 'POST',
        headers: {
          access_token: payload.access_token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
    },
    getById (context, payload) {
      return axios({
        url: '/products/' + payload.id,
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data, 'ini di getById')
          context.commit('setProductById', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    updateProduct (context, payload) {
      return axios({
        url: '/products/' + payload.id,
        method: 'PUT',
        headers: {
          access_token: payload.access_token
        },
        data: {
          name: payload.name,
          price: payload.price,
          stock: payload.stock,
          image_url: payload.image_url
        }
      })
        .then(({ data }) => {
          console.log(data, 'ini di updateProduct store')
          context.commit('setProductByid', data)
        })
    },
    deleteProductById (context, payload) {
      axios({
        url: '/products/' + payload.id,
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        }
      })
    }
  },
  modules: {
  }
})
