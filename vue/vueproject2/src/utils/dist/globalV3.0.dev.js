"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.global = global;

var _elementUi = require("element-ui");

var _compositionApi = require("@vue/composition-api");

function global() {
  var str = (0, _compositionApi.ref)('');

  var confirm = function confirm(params) {
    _elementUi.MessageBox.confirm(params.content, params.tip || "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: params.type || "warning",
      center: true
    }).then(function () {
      str.value = params.id || '';
      params.fn && params.fn(params.id || '');
    })["catch"](function () {
      params.catchFn && params.catchFn();
    });
  };

  return {
    str: str,
    confirm: confirm
  };
}