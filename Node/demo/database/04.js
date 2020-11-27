const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground',{
  useUnifiedTopology:true,
  useNewUrlParser:true
}).then(()=>{
  console.log("连接数据库成功");
}).catch(err=>console.log(err,"连接数据库失败"))

// 创建集合规则
const postSchema= new mongoose.Schema({
  title:{
    type:String,
    required:[true,"请输入标题"],
    // 字符串最小长度
    minlength:[2,"标题最小长度为2"],
    //字符串最大长度
    maxlength:[5,"标题最大长度为5"],
    trim:true
  },
  price:{
    type:Number,
    required:[true,"请输入价格"],
    // 数值最小值
    min:[2,"价格最小值为2"],
    //数值最大值
    max:[5,"价格最大值为5"],
    trim:true
  },
  publishDate:{
    type:Date,
    default:Date.now
  },
  category:{
    type:String,
    //只能填入指定项
    // enum:['html','css','javascript']
    enum:{
      values:['html','css','javascript'],
      message:"分类需在指定范围内"
    }
  },
  author:{
    type:String,
    validate:{
      validator:v=>{
        //v就是传入的参数
        // 返回一个布尔值
        return v&&v.length>4
      },
      //自定义错误信息
      message:"传入值不符合验证规则"
    }
  }
})
//使用规则创建集合
const Post = mongoose.model('Post',postSchema)

Post.create({title:"我是七个字",price:4,category:"java",author:"abc"}).then(res=>{
  console.log(res);
}).catch(err=>{
  err=err.errors
  for(let i in err){
    console.log(err[i].message);
  }
})