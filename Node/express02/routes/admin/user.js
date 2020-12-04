const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send("用户列表")
})

router.get('/add', (req, res) => {
  res.send("增加用户")
})

router.get('/edit', (req, res) => {
  res.send("修改用户")
})

router.post('/add', (req, res) => {
  res.send("执行增加")
})

router.post('/edit', (req, res) => {
  res.send("执行修改")
})

router.post('/del', (req, res) => {
  res.send("执行删除")
})

module.exports = router