import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    banner: [],
    product: {}
  },
  mutations: {
    setProducts (state, dataProducts) {
      state.products = dataProducts
    },
    setProductById (state, productById) {
      state.product = productById
    },
    setProduct (state, dataProduct) {
      state.product = dataProduct
    }
  },
  actions: {
    fetchProducts (context, payload) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          // console.log(data)
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    getProduct({ commit }, id) {
      axios({
        method: 'GET',
        url: `http://localhost:3000/products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(response => {
        commit('setProductById', response.data.product)
      })
      .catch(err => {
        console.log(err);
      })
    },

    deleteProduct ({ dispatch }, payload) {
      axios({
        method: 'DELETE',
        url: `http://localhost:3000/products/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(() => {
          dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    },

    addProduct ({ dispatch }, payload) {
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          Swal.fire(
            'Success',
            `Success added product ${data.name}.`,
            'success'
          )
          dispatch('fetchProducts')
        })
        .catch(({ response }) => {
          Swal.fire(
            'Failed',
            `${response.data.message}`,
            'error'
          )
          this.$router.push('/Add')
        })
    },

    editProduct(context, payload) {
      return axios({
        method: 'PUT',
        url: `http://localhost:3000/products/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }, 
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
      .then(({ data }) => {
        Swal.fire(
          'Success',
          `Success Edited ${data.name}.`,
          'success'
        )
        context.dispatch('fetchProducts')
      })
      .catch(({ response }) => {
        Swal.fire(
          'Failed',
          `${response.data.message}`,
          'error'
        )
        this.$router.push('/Edit')
      })
    }
  },
  modules: {
  }
})
