import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosinstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'E-Commerce CMS',
    products: [],
    product: {},
    categories: []
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
    },
    getCategories (state, payload) {
      state.categories = payload
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
    addProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: 'products',
        method: 'POST',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          CategoryId: payload.CategoryId
        },
        headers: {
          access_token: accessToken
        }
      })
    },
    addCheckout (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: 'checkout',
        method: 'POST',
        data: {
          name: payload.name,
          address: payload.address,
          ProductId: payload.ProductId,
          qty: payload.qty
        },
        headers: {
          access_token: accessToken
        }
      })
    },
    fetchCategories (context) {
      axios
        .get('/categories')
        .then(({ data }) => {
          context.commit('getCategories', data)
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
    editProduct (context, payload, id) {
      return axios({
        url: `/products/${+payload.id}`,
        method: 'PUT',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          CategoryId: payload.CategoryId
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        params: {
          id: id
        }
      })
    },
    buy (context, payload) {
      return axios({
        url: `/products/${+payload.id}`,
        method: 'PATCH',
        data: {
          stock: +payload.stock
        },
        headers: {
          access_token: localStorage.getItem('access_token')
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
