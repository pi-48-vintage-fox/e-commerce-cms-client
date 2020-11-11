import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosinstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'E-Commerce CMS',
    products: [],
    product: {}
  },
  mutations: {
    getProducts (state, payload) {
      state.products = payload
    },
    getProduct (state, payload) {
      state.product = payload
    },
    getStock (state, payload) {
      state.stock = payload
    }
  },
  actions: {
    fetchProducts (context) {
      axios
        .get('/products')
        .then(({ data }) => {
          context.commit('getProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getProductById (context, id) {
      axios({
        url: `/products/${+id}`,
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('getProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    buy (context, payload) {
      return axios({
        url: `/products/${+payload.id}`,
        method: 'PATCH',
        data: {
          stock: +payload.stock
        }
      })
    }
  },
  modules: {
  },
  getters: {
    categoryFilter: (state) => (category) => {
      return state.products.filter(el => {
        return el.Category.name === category
      })
    }
  }
})
