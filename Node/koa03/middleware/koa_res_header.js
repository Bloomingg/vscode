/*
 * @Author: Blooming
 * @Date: 2020-12-08 15:49:20
 * @LastEditTime: 2020-12-08 15:59:37
 * @LastEditors: Blooming
 * @Description: 
 * @FilePath: \Node\koa03\middleware\koa_res_header.js
 */
module.exports = async (ctx, next) => {
  const contentType = 'application/json;charset=utf-8'
  ctx.set('Content-Type', contentType)
  ctx.response.body = '{"success":true}'
  await next()
}