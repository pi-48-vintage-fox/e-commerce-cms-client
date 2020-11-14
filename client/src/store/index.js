import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productById: {}
  },
  mutations: {
    SET_PRODUCTS (state, prodData) {
      state.products = prodData
    },
    SET_PRODUCTBYID (state, prodData) {
      state.productById = prodData
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
          localStorage.setItem('access_token', data.access_token)
          context.dispatch('getProduct')
          const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
        })
        .catch(err => {
          console.log(err)
          console.log('<< err 1')
        })
    },
    getProduct (context, payload) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          context.commit('SET_PRODUCTS', '')
          console.log(err)
          if (err.message === 'Request failed with status code 401') {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'You are not authorized. Please login as an admin to access this page!'
            })
          }
        })
    },
    addProduct (context, payload) {
      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then(() => {
          context.dispatch('getProduct')
        })
        .catch(err => {
          console.log(err)
        })
    },
    delete (context, payload) {
      axios({
        method: 'DELETE',
        url: `/products/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(() => {
          context.dispatch('getProduct')
        })
        .catch(err => {
          console.log(err)
        })
    },
    getProductById (context, payload) {
      axios({
        method: 'GET',
        url: `/products/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTBYID', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    editProduct (context, payload) {
      axios({
        method: 'PUT',
        url: `/products/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then(() => {
          context.dispatch('getProduct')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
