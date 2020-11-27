const http = require('http')
const mongoose = require('mongoose')
const url = require('url')

//数据库连接 27017是默认端口  可省略
mongoose.connect('mongodb://localhost/playground',{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>console.log("success")).catch(()=>console.log("fail"))


// 创建集合规则
const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    minlength:2,
    maxlength:20
  },
  age:{
    type:Number,
    min:18,
    max:80
  },
  password: String,
  email:String,
  hobbies:[String]
})

// 创建集合
const User = mongoose.model('User',userSchema)

// 创建服务器
const app = http.createServer()

//为服务器对象添加请求事件
app.on('request',async (req,res)=>{
  // 请求方式
  const method = req.method;
  // 请求地址
  const { pathname } = url.parse(req.url)

  if (method == 'GET') {
    if(pathname=='/list'){
       let  users = await User.find()
       let
    }
  }else if(method == 'POST'){

  }
})

//监听端口
app.listen(3000)