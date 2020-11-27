const express = require('express')

const app=express()

//app.use为通用中间件 可拦截所有方式的请求
app.use((req,res,next)=>{
  console.log("请求了通用app.use中间件");
  next()
})

app.use('/middleware',(req,res,next)=>{
  console.log("请求了/middleware专用app.use中间件");
  next()
})

app.get('/',(req,res)=>{
  res.send("Hello,Express")
})

app.get('/list',(req,res)=>{
  res.send({
    name:'laowang',
    age:18
  })
})

app.get('/middleware',(req,res,next)=>{
  req.name="中间件"
  //调用next 交由下一个中间件处理
  next()
})

app.get('/middleware',(req,res)=>{
  res.send(req.name)
})

app.listen(3000)