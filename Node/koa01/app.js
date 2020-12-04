const koa = require('koa')
const Router = require('@koa/router')
const ejs = require('ejs')
const bodyparser = require('koa-bodyparser')
const views = require('koa-views')
const static = require('koa-static')

const router = new Router()
const app = new koa()

// app.use(async (ctx) => {
//   ctx.body = "Hello Koa"
// })

//配置bodyparser
app.use(bodyparser())

//配置静态资源(可配置多个)
app.use(static('static'))

//配置模板引擎中间件
app.use(views('views', {
  extension: 'ejs'
}))
//配置方法二 并将默认读取后缀名改为html
// app.use(views('views',{map:{html:'ejs'}}))

router.get('/', async (ctx, next) => {
  // ctx.body = "Hello Koa";
  await ctx.render('index', {
    date: new Date()
  })
})

router.get('/login', async (ctx, next) => {
  // ctx.body = "Hello Koa";
  await ctx.render('login', {

  })
})

router.get('/news/:newId', async (ctx, next) => {
  ctx.body = ctx.params
})

router.post('/login', async (ctx) => {
  ctx.body = ctx.request.body
})


app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3000)