const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground',{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>{
  console.log('连接数据库成功');
}).catch(err=>{
  console.log(err,'连接数据库失败');
})

//创建集合规则
const courseSchema = new mongoose.Schema({
  name:String,
  author:String,
  isPublished:Boolean
})

//使用规则创建集合
const Course = mongoose.model('Course',courseSchema)


// 创建一条文档
const course = new Course({
  name:'node.js',
  author:'xiaoming',
  isPublished:true
})


// 将文档插入数据库中
course.save()