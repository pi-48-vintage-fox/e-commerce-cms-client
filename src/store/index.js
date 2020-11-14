import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../config/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fetchProduct: ''
  },
  mutations: {
    FETCHPRODUCT (state, data) {
      state.fetchProduct = data
    },
    EDITPRODUCT (state, data) {
      state.dataEdit = data
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          // console.log(data)
          localStorage.setItem('access_token', data.access_token)
        })
    },
    fetchProduct (context) {
      axios({
        method: 'GET',
        url: '/product',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('FETCHPRODUCT', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      axios({
        method: 'POST',
        url: '/product',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          router.push({ path: '/Product' })
          context.dispatch('fetchProduct')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, id) {
      axios({
        method: 'delete',
        url: `/Product/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(() => {
          context.dispatch('fetchProduct')
        })
    },
    editProduct (context, payload) {
      axios({
        method: 'PUT',
        url: `/product/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(() => {
          router.push({ path: '/Product' })
        })
    }
  }
})
