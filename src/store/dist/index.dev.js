"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _axios = _interopRequireDefault(require("../../config/axios"));

var _router = _interopRequireDefault(require("../router"));

var _helpers = require("../../helpers");

var _main = _interopRequireDefault(require("../main"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    categories: [],
    products: [],
    filteredProducts: [],
    banners: [],
    user: {}
  },
  mutations: {
    SET_USER: function SET_USER(state, user) {
      console.log('setting user', user);
      state.user = user;
    },
    SET_CATEGORIES: function SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_PRODUCTS: function SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_FILTERED_PRODUCTS: function SET_FILTERED_PRODUCTS(state, products) {
      state.filteredProducts = products;
    }
  },
  actions: {
    addProduct: function addProduct(_ref, payload) {
      var dispatch = _ref.dispatch;
      return (0, _axios["default"])({
        method: 'POST',
        url: '/products/',
        data: payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(function (_ref2) {
        var data = _ref2.data;
        console.log(data, '<<< result add product');
        dispatch('fetchProducts');

        _router["default"].push('/products');
      })["catch"](function (err) {
        console.log(err.response.data);

        _vue["default"].toasted.global.errorMessage(err.response.data.msg);
      });
    },
    deleteProduct: function deleteProduct(_ref3, id) {
      var dispatch = _ref3.dispatch;
      return (0, _axios["default"])({
        method: 'DELETE',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      });
    },
    editProduct: function editProduct(_ref4, payload) {
      var dispatch = _ref4.dispatch;
      return (0, _axios["default"])({
        method: 'PUT',
        url: '/products/' + payload.id,
        data: payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(function (_ref5) {
        var data = _ref5.data;
        console.log(data, '<<< result edit product');

        _vue["default"].toasted.global.successMessage(data.msg);

        dispatch('fetchProducts');

        _router["default"].push('/products');
      })["catch"](function (err) {
        console.log(err.response.data);

        _vue["default"].toasted.global.errorMessage(err.response.data.msg);
      });
    },
    submitLoginForm: function submitLoginForm(_ref6, payload) {
      var commit = _ref6.commit;
      return (0, _axios["default"])({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      });
    },
    fetchUserDetails: function fetchUserDetails(_ref7) {
      var commit = _ref7.commit;
      return (0, _axios["default"])({
        url: '/user',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(function (_ref8) {
        var data = _ref8.data;
        console.log(data, '<<< user data');
        commit('SET_USER', data);
      })["catch"](function (err) {
        console.log("Error fetching user's details:", err);
      });
    },
    fetchCategories: function fetchCategories(_ref9) {
      var commit = _ref9.commit;
      (0, _axios["default"])({
        method: 'GET',
        url: '/categories',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(function (_ref10) {
        var data = _ref10.data;
        console.log(data, '<<<< categories');
        commit('SET_CATEGORIES', data);
      })["catch"](function (err) {
        console.log(err.response.data);

        _vue["default"].toasted.global.errorMessage(err.response.data.msg);
      });
    },
    fetchProducts: function fetchProducts(_ref11) {
      var commit = _ref11.commit;
      (0, _axios["default"])({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(function (_ref12) {
        var data = _ref12.data;
        console.log(data, '<<<< products');
        data.forEach(function (el) {
          el.price = (0, _helpers.toCurrencyFormat)(el.price);
        });
        commit('SET_PRODUCTS', data);
      })["catch"](function (err) {
        console.log(err.response.data);

        _vue["default"].toasted.global.errorMessage(err.response.data.msg);
      });
    },
    fetchCategoryDetails: function fetchCategoryDetails(_, categoryId) {
      console.log('fetch cat details', categoryId);
      return (0, _axios["default"])({
        method: 'GET',
        url: '/categories/' + categoryId,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      });
    },
    fetchProductsByCategory: function fetchProductsByCategory(_ref13, categoryId) {
      var commit = _ref13.commit;
      console.log('fetch by cat:', categoryId);
      (0, _axios["default"])({
        method: 'GET',
        url: '/products?category=' + categoryId,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(function (_ref14) {
        var data = _ref14.data;
        console.log(data, '<<<<< filtered');
        commit('SET_FILTERED_PRODUCTS', data);
      })["catch"](function (err) {
        console.log(err.response.data);

        _vue["default"].toasted.global.errorMessage(err.response.data.msg);
      });
    },
    fetchProductDetails: function fetchProductDetails(_, id) {
      return (0, _axios["default"])({
        method: 'GET',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      });
    }
  },
  modules: {}
});

exports["default"] = _default;