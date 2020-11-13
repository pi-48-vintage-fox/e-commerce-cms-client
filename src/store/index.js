import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    changeProduct: ''
  },
  mutations: {
    FETCH_PRODUCTS (state, payload) {
      state.products = payload
    },
    EDIT_PRODUCT (state, payload) {
      state.changeProduct = payload
      router.push({ path: `/editProduct/${payload.id}` })
        .then(data => {
          console.log(data)
        })
    }
  },
  actions: {
    login (context, payload) {
      return Axios
        .post('https://server-e-commerce.herokuapp.com/login', {
          email: payload.email,
          password: payload.password
        })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchProducts ({ commit }) {
      Axios
        .get('https://server-e-commerce.herokuapp.com/products', {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          data.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
          commit('FETCH_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      Axios
        .post('https://server-e-commerce.herokuapp.com/products', {
          name: payload.name,
          image_url: payload.image_url,
          price: Number(payload.price),
          stock: Number(payload.stock),
          category: payload.category
        },
        {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          this.fetchProducts()
        })
        .catch(err => {
          console.log(err)
        })
    },
    editProduct (context, payload) {
      Axios
        .put(`https://server-e-commerce.herokuapp.com/products/${payload.id}`, {
          name: payload.name,
          image_url: payload.image_url,
          price: Number(payload.price),
          stock: Number(payload.stock),
          category: payload.category
        },
        {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          router.push({ path: '/' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, payload) {
      Axios
        .delete(`https://server-e-commerce.herokuapp.com/products/${payload}`, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          this.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
