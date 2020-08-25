"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _elementUi = require("element-ui");

var _default = {
  install: function install(Vue, options) {
    Vue.prototype.confirm = function (params) {
      _elementUi.MessageBox.confirm(params.content, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      }).then(function () {
        root.$message({
          type: "success",
          message: "删除成功!"
        });
      })["catch"](function () {
        root.$message({
          type: "info",
          message: "已取消删除"
        });
      });
    };
  }
};
exports["default"] = _default;