"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _vuesax = _interopRequireDefault(require("vuesax"));

var _vueToasted = _interopRequireDefault(require("vue-toasted"));

var _store = _interopRequireDefault(require("./store"));

require("vuesax/dist/vuesax.css");

require("material-icons/iconfont/material-icons.css");

require("../public/mdi.css");

require("../public/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueToasted["default"], {
  router: _router["default"],
  duration: 5000,
  keepOnHover: true,
  theme: 'bubble'
});

_vue["default"].use(_vuesax["default"], {
  colors: {
    primary: '#5b3cc4',
    success: 'rgb(23, 201, 100)',
    danger: 'rgb(242, 19, 93)',
    warn: 'rgb(255, 130, 0)',
    dark: 'rgb(36, 33, 69)'
  }
});

_vue["default"].config.productionTip = false;
new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');

_vue["default"].toasted.register('errorMessage', function (payload) {
  return payload;
}, {
  type: 'error',
  icon: 'error_outline'
});

_vue["default"].toasted.register('successMessage', function (payload) {
  return payload;
}, {
  type: 'success',
  icon: 'check_circle_outline'
});

_vue["default"].toasted.register('infoMessage', function (payload) {
  return payload;
}, {
  type: 'info',
  icon: 'info'
});