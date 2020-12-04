const express = require('express')
const path = require('path')
const session = require('express-session')
const app = express();

require('./model/connect')


app.use(session({
  secret: 'secret key',
  resave: true,
  saveUninitialized: true,
}))
app.use(express.urlencoded({
  extended: true
}))

//告诉express框架模板所在的位置
app.set('views', path.join(__dirname, 'views'))
//框架模板的默认后缀名
app.set('view engine', 'art')
//使用什么模板引擎去渲染什么后缀名的模板
app.engine('art', require('express-art-template'))


//开放静态资源文件
app.use(express.static(path.join(__dirname, 'public')))
//登录拦截
app.use('/admin', (req, res, next) => {
  if (req.url != '/login' && !req.session.username) {
    res.redirect('/admin/login')
  } else {
    next()
  }
})

const home = require('./route/home')
const admin = require('./route/admin');

app.use('/home', home)
app.use('/admin', admin)

app.listen(3000)