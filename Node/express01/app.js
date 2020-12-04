const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const app = express()
const port = 3000

// 设置第三方中间件
// app.use(cookieParser())
//cookie加密
app.use(cookieParser('encryption key'))

// 设置session中间件
app.use(session({
  secret: 'encryption key', //服务器端生成的session签名
  name: "blooming", //修改session对应cookie的名称
  resave: false, //强制保存session 即使他没有变化
  saveUninitialized: true, //强制将未初始化的session储存
  cookie: {
    secure: false,
    maxAge: 1000 * 60
  },
  rolling: true, //在每次请求时强行设置cookie 将重置cookie有效时间
  //设置mongo-connect中间件
  store: new MongoStore({
    url: 'mongodb://root:19980930qq@127.0.0.1:27017',
    dbName: 'eggcms',
    touchAfter: 24 * 3600 //不管发出多少次请求 在指定时间内 只要session不改变 就只更新一次
  })
}))




app.get('/', (req, res) => {
  //   maxAge?: number; 有效时间
  //   signed?: boolean;  是否加密
  //   expires?: Date;  有效时间（有效至多久）
  //   httpOnly?: boolean;  仅允许后端读取
  //   path?: string; 仅允许指定路由读取
  //   domain?: string; 允许配置的相同二级域名访问
  //   secure?: boolean; 为true时只有https才能访问
  //   encode?: (val: string) => string;
  //   sameSite?: boolean | 'lax' | 'strict' | 'none';
  res.cookie('name', 'zhangsan', {
    maxAge: 1000 * 60,
    signed: true
  })
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  // 设置session
  req.session.username = "blooming"
  req.session.loginTime = new Date()
  res.send('正在登录')
})

app.get('/logout', (req, res) => {
  //销毁session
  //方式一 销毁所有
  req.session.cookie.maxAge = 0
  //方式二 销毁所有
  // req.session.destroy()
  //方式三 销毁指定session
  // req.session.loginTime = ""
  res.send('正在退出')
})

app.get('/register', (req, res) => {
  //读取加密后的cookie
  const name = req.signedCookies.name
  res.send('读取加密后的cookie+' + name)
})

app.get('/artice', (req, res) => {
  // 常规读取cookie
  const name = req.cookies.name
  res.send('常规读取cookie+' + name)
})

app.post('/login', function (req, res) {
  res.send('执行登录')
})

//多级路由
app.get('/artice/add', (req, res) => {
  //获取session
  const username = req.session.username
  const loginTime = req.session.loginTime
  if (username || loginTime) {
    res.send('您已登录' + username + '--' + loginTime)
  } else {
    res.send('您还未登录')
  }

})

//动态路由
app.get('/artice/:id', (req, res) => {
  const id = req.params.id
  res.send('动态路由' + id)
})

//get传值（url）
app.get('/product', (req, res) => {
  const query = req.query
  res.send('url参数' + query.id)
})

app.listen(port, () => console.log(`Example app listening on port port!`))