const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const app = express()
const port = 3000

//引入路由
const admin = require('./routes/admin')
const index = require('./routes/index')
const api = require('./routes/api')

app.set("view engine", "ejs")
//配置更改ejs的后缀 默认为.ejs
// app.engine("html",ejs.__express)
// app.set("view engine","html")

//配置静态web目录
app.use(express.static("static"))

//配置第三方中间件
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

//配置路由
app.use('/admin', admin)
app.use('/index', index)
app.use('/api', api)

app.use((req, res) => {
  res.status(404).send("页面不存在")
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))