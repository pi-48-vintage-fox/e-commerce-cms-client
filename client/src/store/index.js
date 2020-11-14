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
      axios({
        url: `/product/${id}`,
        method: 'GET',
        headers: { access_token: accessToken }
      })
        .then(({ data }) => {
          context.commit('setProductById', data)
        })
        .catch(err => {
          console.log(err)
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
        .then(({ data }) => {
          this.fetchProduct()
        })
        .catch(err => {
          console.log(err)
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
    updateProduct (context, data) {
      console.log(+data.dataBarang.price, 'dari store')
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: `/product/${data.id}`,
        method: 'PUT',
        headers: { access_token: accessToken },
        body: {
          name: data.dataBarang.name,
          image_url: data.dataBarang.image_url,
          price: data.dataBarang.price,
          stock: data.dataBarang.stock,
          CategoryId: data.dataBarang.CategoryId
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  modules: {
  }
})
