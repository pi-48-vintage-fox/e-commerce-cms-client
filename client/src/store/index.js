import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product: [],
    category: [],
    productById: [],
    productCategory: []
  },
  mutations: {
    setProduct (state, payload) {
      state.product = payload
    },
    setProductById (state, payload) {
      state.productById = payload
    },
    setCategory (state, payload) {
      state.category = payload
    },
    setProductCategory (state, payload) {
      state.productCategory = payload
    }
  },
  actions: {
    fetchProduct (context) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: '/product',
        method: 'GET',
        headers: { access_token: accessToken }
      })
        .then(({ data }) => {
          context.commit('setProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProductById (context, id) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: `/product/${id}`,
        method: 'GET',
        headers: { access_token: accessToken }
      })
    },
    fetchCategory (context) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: '/category',
        method: 'GET',
        headers: { access_token: accessToken }
      })
        .then(({ data }) => {
          context.commit('setCategory', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: '/product',
        method: 'POST',
        headers: { access_token: accessToken },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          CategoryId: payload.CategoryId
        }
      })
    },
    deleteProduct (context, id) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: `/product/${id}`,
        method: 'DELETE',
        headers: { access_token: accessToken }
      })
        .then(({ data }) => {
          console.log(data)
          this.fetchProduct()
        })
        .catch(err => {
          console.log(err)
        })
    },
    viewProductById (context, id) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: `/category/${id}`,
        method: 'GET',
        headers: { access_token: accessToken }
      })
        .then(({ data }) => {
          context.commit('setProductCategory', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: `/product/${payload.idParams}`,
        method: 'PUT',
        headers: { access_token: accessToken },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          CategoryId: payload.CategoryId
        }
      })
    }
  },
  modules: {
  }
})
