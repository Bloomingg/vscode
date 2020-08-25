"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetList = GetList;
exports.AddInfo = AddInfo;
exports.EdidInfo = EdidInfo;
exports.DeleteInfo = DeleteInfo;
exports.AddFristCategory = AddFristCategory;
exports.AddChildrenCategory = AddChildrenCategory;
exports.GetCategory = GetCategory;
exports.GetCategoryAll = GetCategoryAll;
exports.DeleteCategory = DeleteCategory;
exports.EditCategory = EditCategory;

var _request = _interopRequireDefault(require("@/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 列表
 */
function GetList(data) {
  return _request["default"].request({
    method: "post",
    url: "/news/getList/",
    data: data
  });
}
/**
 * 新增信息
 */


function AddInfo(data) {
  return _request["default"].request({
    method: "post",
    url: "/news/add/",
    data: data
  });
}
/**
 * 编辑
 */


function EdidInfo(data) {
  return _request["default"].request({
    method: "post",
    url: "/news/editInfo/",
    data: data
  });
}
/**
* 删除
*/


function DeleteInfo(data) {
  return _request["default"].request({
    method: "post",
    url: "/news/deleteInfo/",
    data: data
  });
}
/**
 * 一级分类添加
 */


function AddFristCategory(data) {
  return _request["default"].request({
    method: "post",
    url: "/news/addFirstCategory/",
    data: data
  });
}
/**
 * 子级分类添加
 */


function AddChildrenCategory(data) {
  return _request["default"].request({
    method: "post",
    url: "/news/addChildrenCategory/",
    data: data
  });
}
/**
 * 获取分类
 */


function GetCategory(data) {
  return _request["default"].request({
    method: "post",
    url: "/news/getCategory/",
    data: data
  });
}
/**
 * 获取全部分类（包含子级）
 */


function GetCategoryAll(data) {
  return _request["default"].request({
    method: "post",
    url: "/news/getCategoryAll/",
    data: data
  });
}
/**
 * 删除分类
 */


function DeleteCategory(data) {
  return _request["default"].request({
    method: "post",
    url: "/news/deleteCategory/",
    data: data
  });
}
/**
 * 修改分类
 */


function EditCategory(data) {
  return _request["default"].request({
    method: "post",
    url: "/news/editCategory/",
    data: data
  });
}