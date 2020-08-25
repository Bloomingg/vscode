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

  return {
    str: str,
    confirm: confirm
  };
}