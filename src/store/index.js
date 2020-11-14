import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
// import Swal from 'sweetalert2'

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
          localStorage.setItem('access_token', response.data.access_token)
          router.push({ path: '/home' })
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
          console.log(err)
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
          dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
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
          dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
