const Controller = require('egg').Controller

/**
 * @Controller
 */
class UserController extends Controller {
  /**
   * @summary 创建用户
   * @description 创建用户
   * @router post /user
   * @request body createUserRequest *body
   * @response 200 createUserResponse ok
   */
  async create() {
    const {
      ctx
    } = this
    const res = {
      key: 123
    }
    const msg = 'success'
    ctx.helper.success({
      ctx,
      res,
      msg
    })
    // ctx.body = 'create user'
  }
}

module.exports = UserController