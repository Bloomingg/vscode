const express = require('express')
const fs = require('fs')
const promisify = require('util').promisify
const readFile = promisify(fs.readFile)

const app=express()

// //同步方式
// app.get('/err',(req,res,next)=>{
//   //主动抛出错误为同步方式
//   throw new Error("服务器内部错误")
// })

// //异步API出错
// app.get('/err',(req,res,next)=>{
//   fs.readFile('02.js','utf8',(err,data)=>{
//     if(err!=null){
//       //通过next将err信息传递给错误处理中间件
//       next(err)
//     }else{
//       res.send(data)
//     }
//   })
// })

//try catch 可以捕获异步函数以及其他同步代码在执行过程中发生的错误，但不能捕获其他类型的API错误
app.get('/err',async(req,res,next)=>{
  try {
    await readFile('./err.js')
  } catch (error) {
    next(error)
  }
})

 //错误处理
app.use((err,req,res,next)=>{
  res.status(500).send(err.message)
})

app.listen(3000)