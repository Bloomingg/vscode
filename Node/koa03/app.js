const koa = require('koa')
const Router = require('@koa/router')
const fs = require('fs')
const app = new koa()
const router = new Router()

// const duration = require('./middleware/koa_res_duration')
// const header = require('./middleware/koa_res_header')

// app.use(duration)
// app.use(header)

router.get('/', (ctx) => {
  console.log(111);
  // ctx.body = 111
  fs.readFile("./views/index.html", (err, data) => {
    // ctx.set("Content-Type", "text/html")
    // console.log(data);
    ctx.body = 111
  })
})

router.get('/proxy', (ctx) => {
  ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
  // ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  ctx.set('Access-Control-Allow-Credentials', 'true')
  ctx.set('Set-Cookie', 'key=saido')
  ctx.body = [{
    name: "json",
    age: 18
  }]
})

router.options('/proxy', (ctx) => {
  ctx.status = 204
  ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:5500/')
  // ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  ctx.set('Access-Control-Allow-Headers', 'X-Token,Content-Type')
  ctx.set('Access-Control-Allow-Methods', '*')
  ctx.set('Access-Control-Allow-Credentials', 'true')
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(4000)