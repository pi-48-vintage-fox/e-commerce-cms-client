import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    login (context, payload) {
      return axios({
        method: 'POST',
        url: '/users/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          console.log(data.access_token)
          localStorage.setItem('access_token', data.access_token)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
