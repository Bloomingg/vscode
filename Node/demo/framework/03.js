const bodyParser = require('body-parser')
const express = require('express')
const admin = require('./route/admin')
const home = require('./route/home')

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
// app.use(express.urlencoded({extended:true}))

//获取get参数
app.get('/add',(req,res)=>{
  res.send(req.query)
})

//获取post参数
app.post('/add',(req,res)=>{
  res.send(req.body)
})

app.use(fn({a:2}))

function fn(obj){
  return function (req,res,next){
    if(obj.a==1){
      console.log(req.url);
    }else{
      console.log(req.method);
    }
    next()
  }
}

app.use('/home',home)
app.use('/admin',admin)
app.use((req,res)=>{
  res.status(404).send('not found')
})

app.listen(3000)