import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {}
  },
  mutations: {
    SET_PRODUCTS (state, dataproducts) {
      state.products = dataproducts
    },
    SET_PRODUCT (state, dataproducts) {
      state.product = dataproducts
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          console.log('MASUK GA YA?')
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          router.push({ path: '/' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/products',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          category: payload.category
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log('MASUK GA YA?')
          console.log(data)
          router.push({ path: '/' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProducts (context) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log('MASUK GA YA?')
          console.log(data)
          context.commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    editProduct ({ dispatch }, payload) {
      console.log(payload)
      axios({
        method: 'PUT',
        url: `http://localhost:3000/products/${payload.id}`,
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          category: payload.category
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          dispatch('fetchProducts')
          router.push({ path: '/' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct ({ dispatch }, payload) {
      axios({
        method: 'DELETE',
        url: `http://localhost:3000/products/${payload.id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    showGameOnly (context) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          const products = data
          const game = []
          console.log('aaaa')
          console.log(products)
          products.forEach(el => {
            if (el.category === 'game') {
              game.push(el)
            }
          })
          context.commit('SET_PRODUCTS', game)
        })
        .catch(err => {
          console.log(err)
        })
    },
    showDLCOnly (context) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          const products = data
          const game = []
          console.log('aaaa')
          console.log(products)
          products.forEach(el => {
            if (el.category === 'dlc') {
              game.push(el)
            }
          })
          context.commit('SET_PRODUCTS', game)
        })
        .catch(err => {
          console.log(err)
        })
    },
    showWorkshopOnly (context) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          const products = data
          const game = []
          console.log('aaaa')
          console.log(products)
          products.forEach(el => {
            if (el.category === 'workshop') {
              game.push(el)
            }
          })
          context.commit('SET_PRODUCTS', game)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
