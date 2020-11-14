import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    showEditForm: true,
    currentProductData: {}
  },
  mutations: {
    SET_PRODUCTS (state, dataProducts) {
      state.products = dataProducts
    },
    SET_EDIT_FORM (state) {
      state.showEditForm = !state.showEditForm
    },
    SET_EDIT_DATA (state, payload) {
      state.currentProductData = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: payload
      })
        .then(response => {
          Swal.fire({
            icon: 'success',
            title: 'Login success',
            showConfirmButton: false,
            timer: 2000
          })
          localStorage.setItem('access_token', response.data.access_token)
          router.push({ path: '/home' })
        })
        .catch(err => {
          Swal.fire(
            'Error!',
            err.response.data.message,
            'ERROR'
          )
        })
    },
    fetchProducts (context, payload) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProducts ({ dispatch }, payload) {
      axios({
        method: 'DELETE',
        url: `http://localhost:3000/products/${payload.id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          dispatch('fetchProducts')
        })
        .catch(err => {
          Swal.fire(
            'Error!',
            err.response.data.message,
            'ERROR'
          )
        })
    },
    editProducts ({ dispatch }, payload) {
      axios({
        method: 'PUT',
        url: `http://localhost:3000/products/${payload.id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          category: payload.category
        }
      })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          dispatch('fetchProducts')
        })
        .catch(err => {
          Swal.fire(
            'Error!',
            err.response.data.message,
            'ERROR'
          )
        })
    },
    addProducts ({ dispatch }, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/products',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          category: payload.category
        }
      })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          dispatch('fetchProducts')
        })
        .catch(err => {
          Swal.fire(
            'Error!',
            err.response.data.message,
            'ERROR'
          )
        })
    }
  },
  modules: {
  }
})
