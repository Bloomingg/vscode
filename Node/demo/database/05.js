const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground',{
  useUnifiedTopology:true,
  useNewUrlParser:true
}).then(()=>{
  console.log("连接数据库成功");
}).catch(err=>console.log(err,"连接数据库失败"))

//用户集合规则
const UserSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true,
    min:18,
    max:100
  }
})

//文章集合规则
const PostSchema= new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  }
})

const User = mongoose.model('User',UserSchema)
const Post = mongoose.model('Post',PostSchema)

// User.create({name: 'xiaoming',age:20}).then(res=>console.log(res))

// Post.create({title:'html基础',author:'5fbf53b178b1fa1b14c84f35'}).then(res=>{
//   console.log(res);
// })

Post.find().populate('author').then(res=>{
  console.log(res);
})