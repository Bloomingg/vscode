const express = require('express')

const {User} = require('../model/user')

const admin = express.Router()

admin.get('/login',(req,res)=>{
  // res.send('admin')
  res.render('admin/login')
})

admin.post('/login',async (req,res)=>{
  // res.send('admin')
  // res.send(req.body)
  const {email,password} = req.body
  if(email.trim().length == 0||password.trim().length == 0){
    return res.status(400).render('admin/error',{
      msg:"请输入用户名和密码！"
    })
  }else{
    let user =await User.findOne({email})
  }
})

admin.get('/user',(req,res)=>{
  res.render('admin/user')
})

module.exports= admin