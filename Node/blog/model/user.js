const mongoose = require('mongoose')


//创建用户集合规则
const userSchema= new mongoose.Schema({
  username:{
    type:String,
    required:true,
    minlength:2,
    maxlength:20
  },
  email:{
    type:String,
    unique:true,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  role:{
    type:String,
    required:true
  },
  state:{
    type:Number,
    //默认0为启用
    default:0
  }
})

//创建集合
const User = mongoose.model('User',userSchema)

// User.create({
//   username:'blooming',
//   email:'blooming2477@gmail.com',
//   password:'19980930qq',
//   role:'admin'
// }).then(res=>{
//   console.log(res);
// })

module.exports={
  User
}