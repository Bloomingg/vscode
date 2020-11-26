"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _elementUi = require("element-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  redirect: '/login',
  hidden: true,
  meta: {
    name: "主页"
  }
}, {
  path: '/login',
  name: 'Login',
  hidden: true,
  meta: {
    name: "登录"
  },
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Login/index.vue'));
    });
  }
}, {
  path: '/console',
  name: 'Console',
  meta: {
    name: "控制台",
    icon: 'el-icon-monitor'
  },
  redirect: '/index',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Layout/index'));
    });
  },
  children: [{
    path: '/index',
    name: 'Index',
    meta: {
      name: "首页"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Console/Console'));
      });
    }
  }]
}, {
  path: '/info',
  name: 'Info',
  meta: {
    name: "信息管理",
    icon: 'el-icon-s-order'
  },
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Layout/index.vue'));
    });
  },
  children: [{
    path: '/infoIndex',
    name: 'InfoIndex',
    meta: {
      name: "信息列表"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Info/index'));
      });
    }
  }, {
    path: '/infoCategory',
    name: 'InfoCategory',
    meta: {
      name: "信息分类"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Info/InfoCategory'));
      });
    }
  }, {
    path: '/infoDetailed',
    name: 'infoDetailed',
    hidden: true,
    meta: {
      name: "信息详情"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Info/infoDetailed'));
      });
    }
  }]
}, {
  path: '/user',
  name: 'User',
  meta: {
    name: "用户管理",
    icon: 'el-icon-s-custom'
  },
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Layout/index.vue'));
    });
  },
  children: [{
    path: '/userIndex',
    name: 'UserIndex',
    meta: {
      name: "用户列表"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/User/index'));
      });
    }
  }]
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;