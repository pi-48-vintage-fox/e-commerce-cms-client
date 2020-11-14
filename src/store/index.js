/* eslint-disable handle-callback-err */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router/index'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    idProduct: 0,
    pageActive: ''
  },
  mutations: {
    FETCH_PRODUCTS (state, payload) {
      state.products = payload
    },
    ID_FOR_EDIT (state, payload) {
      state.idProduct = +payload
    },
    ACTIVE_PAGE (state, payload) {
      state.pageActive = payload
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
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
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
          localStorage.setItem('access_token', response.data.access_token)
          localStorage.setItem('name', response.data.name)
          router.push({ path: '/admin/products' })
        })
        .catch(err => {
          Swal.fire({
            title: `${err.response.data.errorMsg}`,
            // text: 'Do you want to continue',
            icon: 'error'
            // confirmButtonText: 'Cool'
          })
        })
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
        .catch(err => console.log(err.response))
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
          Swal.fire({
            title: 'Success add Product',
            icon: 'success'
          })
          context.dispatch('fetchProducts')
        })
        .catch(err => {
          Swal.fire({
            title: `${err.response.data.errorMsg}`,
            icon: 'error'
          })
        })
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
          Swal.fire({
            title: 'Success edit Product',
            icon: 'success'
          })
          context.dispatch('fetchProducts')
          router.push({ path: '/admin/products' })
        })
        .catch(err => {
          Swal.fire({
            title: `${err.response.data.errorMsg}`,
            icon: 'error'
          })
        })
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
