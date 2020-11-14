import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productName: '',
    productUrl: '',
    productStock: 0,
    productPrice: 0
  },
  mutations: {
    SET_PRODUCTS (state, dataProducts) {
      state.products = dataProducts
    },
    SET_CURRENT (state, payload) {
      if (Object.keys(payload).length === 0 && payload.constructor === Object) {
        state.productName = ''
        state.productUrl = ''
        state.productStock = 0
        state.productPrice = 0
      } else {
        state.productName = payload.name
        state.productUrl = payload.image_url
        state.productStock = payload.stock
        state.productPrice = payload.price
      }
    },
    SET_NAME (state, name) {
      state.productName = name
    },
    SET_URL (state, imageUrl) {
      state.productUrl = imageUrl
    },
    SET_STOCK (state, stock) {
      state.productStock = stock
    },
    SET_PRICE (state, price) {
      state.productPrice = price
    }
  },
  actions: {
    fetchProducts ({ commit }) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addproduct (context, payload) {
      return axios({
        method: 'POST',
        url: '/products',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    editproduct (context, payload) {
      return axios({
        method: 'PUT',
        url: `/products/${payload.id}`,
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    deleteproduct (context, id) {
      return axios({
        method: 'DELETE',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    login (context, payload) {
      return axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    }
  },
  modules: {
  }
})
