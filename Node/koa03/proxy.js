const koa = require('koa')
const static = require('koa-static')
// const Router = require('@koa/router')

const app = new koa()
// const route = new Router()

app.use(static('static'))

app.listen(3000)