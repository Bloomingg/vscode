const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('用户登录')
})

router.post('/', (req, res) => {
  res.send('执行登录')
})

module.exports = router