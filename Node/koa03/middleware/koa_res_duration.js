/*
 * @Author: Blooming
 * @Date: 2020-12-08 15:49:06
 * @LastEditTime: 2020-12-08 15:56:30
 * @LastEditors: Blooming
 * @Description: 
 * @FilePath: \Node\koa03\middleware\koa_res_duration.js
 */
module.exports = async (ctx, next) => {
  //记录开始时间
  const start = Date.now()
  //让内层中间件执行
  await next()
  //记录结束时间
  const end = Date.now()
  //设置响应头
  const duration = end - start
  ctx.set('X-Respense-Time', duration + 'ms')
}