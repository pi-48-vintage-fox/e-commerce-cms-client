import Vue from 'vue'
import Vuex from 'vuex'
import Axios from '../configs/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    responseMsg: '',
    errorMsg: '',
    addModal: false,
    editModal: false,
    banners: [],
    addBannerModal: false,
    editBannerModal: false
  },
  mutations: {
    LOGOUT (state) {
      state.token = ''
      localStorage.clear()
    },
    setToken (state, token) {
      state.token = token
    },
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_RESPONSE_MSG (state, payload) {
      state.responseMsg = payload
    },
    SET_ERROR_MSG (state, payload) {
      state.errorMsg = payload
    },
    TOGGLE_ADD_MODAL (state) {
      state.addModal = !state.addModal
    },
    TOGGLE_EDIT_MODAL (state) {
      state.editModal = !state.editModal
    },
    ERROR_MSG (state, payload) {
      let errors = ''
      payload.forEach(item => {
        errors += '- ' + item + '<br/>'
      })
      Vue.$vToastify.error(errors, 'Ooops')
    },
    SUCCESS_MSG (state, payload) {
      Vue.$vToastify.success(payload, 'Yayy')
    },
    LOADING (state, payload) {
      Vue.$vToastify.loader('Please Wait...')
    },
    STOP_LOADING (state, payload) {
      Vue.$vToastify.stopLoader()
    },
    SET_BANNERS (state, payload) {
      state.banners = payload
    },
    TOGGLE_ADD_BANNER_MODAL (state) {
      state.addBannerModal = !state.addBannerModal
    },
    TOGGLE_EDIT_BANNER_MODAL (state) {
      state.editBannerModal = !state.editBannerModal
    }
  },
  actions: {
    fetchproducts ({ commit }) {
      Axios
        .get('/products')
        .then(response => {
          commit('SET_PRODUCTS', response.data.products)
          commit('SET_RESPONSE_MSG', response.data.msg)
        })
        .catch(err => {
          commit('SET_ERROR_MSG', err)
        })
    },
    insertProduct (context, payload) {
      Axios
        .post('/products', payload)
        .then(response => {
          context.dispatch('fetchproducts')
          context.commit('SUCCESS_MSG', 'Add product success')
          context.commit('TOGGLE_ADD_MODAL')
        })
        .catch(err => {
          context.commit('ERROR_MSG', err.response.data.msg)
        })
    },
    deleteProduct (context, id) {
      context.commit('LOADING')
      Axios
        .delete('/products/' + id)
        .then(response => {
          context.commit('STOP_LOADING')
          context.dispatch('fetchproducts')
          context.commit('SUCCESS_MSG', 'Product deleted')
        })
        .catch(err => {
          context.commit('STOP_LOADING')
          context.commit('ERROR_MSG', err.response.data.msg)
        })
    },
    editProduct (context, payload) {
      context.commit('LOADING')
      Axios
        .put(`/products/${payload.id}`, payload.data)
        .then(response => {
          context.commit('STOP_LOADING')
          context.dispatch('fetchproducts')
          context.commit('SUCCESS_MSG', 'Product updated')
          context.commit('TOGGLE_EDIT_MODAL')
        })
        .catch(err => {
          context.commit('STOP_LOADING')
          context.commit('ERROR_MSG', err.response.data.msg)
        })
    },
    fetchBanners ({ commit }) {
      commit('LOADING')

      Axios
        .get('/banners')
        .then(response => {
          commit('STOP_LOADING')

          commit('SET_BANNERS', response.data.banners)
        })
        .catch(err => {
          commit('STOP_LOADING')
          commit('ERROR_MSG', err)
        })
    },
    insertBanner ({ commit, dispatch }, payload) {
      commit('LOADING')
      Axios
        .post('/banners', payload)
        .then(response => {
          commit('STOP_LOADING')
          commit('SUCCESS_MSG', 'Banner Added')
          dispatch('fetchBanners')
          commit('TOGGLE_ADD_BANNER_MODAL')
        })
        .catch(err => {
          commit('STOP_LOADING')
          commit('ERROR_MSG', err)
        })
    },
    editBanner ({ commit, dispatch }, payload) {
      commit('LOADING')
      Axios
        .put('/banners/' + payload.id, payload.data)
        .then(response => {
          commit('STOP_LOADING')
          commit('SUCCESS_MSG', 'Banner Updated')
          dispatch('fetchBanners')
          commit('TOGGLE_EDIT_BANNER_MODAL')
        })
        .catch(err => {
          commit('STOP_LOADING')
          commit('ERROR_MSG', err)
        })
    },
    deleteBanner ({ commit, dispatch }, id) {
      commit('LOADING')
      Axios
        .post('/banners/' + id)
        .then(response => {
          commit('STOP_LOADING')
          commit('SUCCESS_MSG', 'Banner Deleted')
          dispatch('fetchBanners')
        })
        .catch(err => {
          commit('STOP_LOADING')
          commit('ERROR_MSG', err)
        })
    }
  },
  getters: {
  }
})
