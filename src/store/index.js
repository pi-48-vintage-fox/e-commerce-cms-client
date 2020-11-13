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
    getProducts (state, payload) {
      state.products = payload
    },
    getProductById (state, payload) {
      state.product = payload
    }

  },
  actions: {

    login (context, payload) {
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
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({
          data
        }) => {
          console.log(data)
          context.commit('getProducts', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },

    addProduct (context, payload) {
      return axios({
        url: '/products',
        method: 'post',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          price: payload.price,
          stock: payload.stock,
          image_url: payload.image_url
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
    },

    deleteProduct (context, id) {
      return axios({
        url: `/products/${id}`,
        method: 'delete',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(() => {
          console.log('Success delete product data')
        })
    },

    getProductById (context, id) {
      return axios({
        url: `/products/${id}`,
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('getProductById', data)
        })
    },

    editProduct (context, payload) {
      return axios({
        url: `/products/${payload.id}`,
        method: 'put',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          price: payload.price,
          stock: payload.stock,
          image_url: payload.image_url
        }
      })
    }

  },
  modules: {}
})
