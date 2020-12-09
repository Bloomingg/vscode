module.exports = {
  createUserRequest: {
    mobile: {
      type: 'string',
      required: true,
      example: '17396220444'
    },
    password: {
      type: 'string',
      required: true,
      example: '123456abc'
    },
    realName: {
      type: 'string',
      required: true,
      example: 'video'
    },
    // resourceTag: { type: 'array', itemType: 'string' },
    // owner: { type: 'User', required: true },
    // owners: { type: 'array', itemType: 'User' }
  },
  createUserResponse: {
    code: {
      type: 'integer',
      required: true,
      example: 200
    },
    data: {
      type: 'string',
      example: '请求成功'
    },
    errorMessage: {
      type: 'string',
      example: '请求失败'
    }
  }
};