const express = require('express')

const router = express.Router()

const login = require('./admin/login')
const user = require('./admin/user')
const nav = require('./admin/nav')

router.get('/', (req, res) => {
  res.send("管理后台首页")
})

router.use('/login', login)

router.use('/user', user)

router.use('/nav', nav)

module.exports = router