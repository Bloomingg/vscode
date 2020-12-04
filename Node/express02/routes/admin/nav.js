const express = require('express')
const tools = require('../../model/tools')

const router = express.Router()

router.get('/', (req, res) => {
  res.send("菜单列表")
})

router.get('/add', (req, res) => {
  // res.send("增加菜单")
  res.render('admin/nav/add')
})

router.get('/edit', (req, res) => {
  res.send("修改菜单")
})

// 单文件上传
// router.post('/add', tools.multer().single('pic'), (req, res) => {
//   res.send({
//     body: req.body,
//     file: req.file
//   })
// })

//多文件上传
const mulUp = tools.multer().fields([{
  name: 'pic',
  maxCount: 1
}, {
  name: 'pic2',
  maxCount: 1
}])
router.post('/add', mulUp, (req, res) => {
  res.send({
    body: req.body,
    files: req.files
  })
})

router.post('/edit', (req, res) => {
  res.send("执行修改")
})

router.post('/del', (req, res) => {
  res.send("执行删除")
})

module.exports = router