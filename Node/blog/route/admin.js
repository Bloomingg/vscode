const express = require('express')

const {
  User
} = require('../model/user')

const admin = express.Router()

admin.get('/login', (req, res) => {
  // res.send('admin')
  res.render('admin/login')
})

admin.post('/login', async (req, res) => {
  // res.send('admin')
  // res.send(req.body)
  const {
    email,
    password
  } = req.body
  if (email.trim().length == 0 || password.trim().length == 0) {
    return res.status(400).render('admin/error', {
      msg: "请输入用户名和密码！"
    })
  } else {
    let user = await User.findOne({
      email
    })
    if (user && user.password == password) {
      req.session.username = user.username
      // res.send('登录成功')
      req.app.locals.userInfo = user
      res.redirect('/admin/user')
    } else {
      return res.status(400).render('admin/error', {
        msg: "用户名或密码不正确！"
      })
    }
  }
})

admin.get('/user', async (req, res) => {
  const users = await User.find({})
  res.render('admin/user', {
    users: users
  })
})

admin.get('/user-edit', async (req, res) => {
  const {
    message,
    id
  } = req.query

  if (id) {
    let user = await User.findOne({
      _id: id
    })
    res.render('admin/user-edit', {
      link: "/admin/user-edit",
      message: message,
      button: "修改",
      user: user
    })
  } else {
    res.render('admin/user-edit', {
      link: "/admin/user-edit",
      message: message,
      button: "添加"
    })
  }

})

admin.post('/user-edit', async (req, res) => {
  // res.send(req.body) 
  if (req.body._id) {
    let result = await User.updateOne({
      _id: req.body._id
    }, {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      state: req.body.state,
    })
    if (result.ok == 1) {
      return res.redirect('/admin/user')
    } else {
      res.redirect(`/admin/user-edit?message=修改失败，请重试`)
    }

  } else {
    let user = await User.findOne({
      email: req.body.email
    })
    if (user) {
      return res.redirect(`/admin/user-edit?message=该邮箱地址已被注册`)
    } else {
      await User.create(req.body)
      res.redirect('/admin/user')
    }
  }

})


module.exports = admin