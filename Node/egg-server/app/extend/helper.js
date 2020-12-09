/*
 * @Author: Blooming
 * @Date: 2020-12-09 20:22:33
 * @LastEditTime: 2020-12-09 20:25:53
 * @LastEditors: Blooming
 * @Description: 
 * @FilePath: \Node\egg-server\app\extend\helper.js
 */
//处理成功响应
exports.success = ({
  ctx,
  res,
  msg
}) => {
  ctx.body = {
    code: 0,
    data: res,
    msg
  }
  ctx.status = 200
}