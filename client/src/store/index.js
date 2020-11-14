import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS(state,dataProducts){
      state.products = dataProducts
    }
  },
  actions: {
    fetchProducts({commit}){
      axios({
        method : 'GET',
        url: '/products',
        headers : {
          access_token: localStorage.access_token
        }
      })
      .then(({data})=>{
        commit('SET_PRODUCTS',data)
      })
      .catch(err=>{
        console.log(err);
      })
    },
    addproduct(context,payload){
      return axios({
        method : 'POST',
        url: '/products',
        data : {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
        },
        headers : {
          access_token: localStorage.access_token
        }
      })
    },
    login(context,payload){
      return axios({
        method: 'POST',
        url: '/login',
        data : {
            email: payload.email,
            password: payload.password
        }
      })
    }
  },
  modules: {
  }
})
