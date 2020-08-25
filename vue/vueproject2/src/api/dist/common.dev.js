"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.common = common;
exports.QiniuToKen = QiniuToKen;
exports.loadTableData = loadTableData;
exports.GetCityPicker = GetCityPicker;

var _news = require("@/api/news");

var _compositionApi = require("@vue/composition-api");

var _request = _interopRequireDefault(require("@/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function common() {
  var categoryItem = (0, _compositionApi.reactive)({
    item: []
  });
  /**
   * 获取分类
   */

  var getInfoCategory = function getInfoCategory() {
    (0, _news.GetCategory)({}).then(function (response) {
      categoryItem.item = response.data.data.data;
    })["catch"](function (error) {});
  };
  /**
   * 获取全部分类
   */


  var getInfoCategoryAll = function getInfoCategoryAll() {
    (0, _news.GetCategoryAll)({}).then(function (response) {
      categoryItem.item = response.data.data;
    })["catch"](function (error) {});
  };

  return {
    getInfoCategory: getInfoCategory,
    getInfoCategoryAll: getInfoCategoryAll,
    categoryItem: categoryItem
  };
}
/**
 * 获取七牛云token
 * 
 * @param {
 *  AK: 七牛云的密钥AK；type: string
 *  SK: 七牛云的密钥AK；type: string
 *  buckety: 七牛云储存空间名称；type: string
 * } params 
 * 
 */


function QiniuToKen(data) {
  return _request["default"].request({
    method: "post",
    url: "/uploadImgToken/",
    data: data
  });
}
/**
 * 请求表格数据
 */


function loadTableData(params) {
  return _request["default"].request({
    method: params.method || "post",
    url: params.url,
    data: params.data || {}
  });
}
/**
 * 获取省市区街关联
 * 
 * @param {
    *  
    * } params 
    * 
    */


function GetCityPicker(data) {
  return _request["default"].request({
    method: "post",
    url: "/cityPicker/",
    data: data
  });
}