/*
 * @Author: Blooming
 * @Date: 2020-12-09 20:11:41
 * @LastEditTime: 2020-12-09 20:16:33
 * @LastEditors: Blooming
 * @Description: 错误处理中间件
 * @FilePath: \Node\egg-server\app\middleware\error_handler.js
 */
module.exports = (option, app) => {
  return async function (ctx, next) {
    try {
      await next()
    } catch (err) {
      app.emit('error', err, this)
      const status = err.status || 500
      const error = status === 500 && app.config.env === 'prod' ? 'Internal Server Error' : err.message
      ctx.body = {
        code: status,
        error: error
      }
      //用户定义型错误
      if (status === 422) {
        ctx.body.detail = err.errors
      }
      ctx.status = 200
    }
  }
}