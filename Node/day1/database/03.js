const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground',{
  useUnifiedTopology:true,
  useNewUrlParser:true
}).then(()=>console.log("连接数据库成功")).catch(err=>console.log(err,"连接数据库失败"))

// 创建集合规则
const userSchema = new mongoose.Schema({
  name:String,
  age:Number,
  email:String,
  password:String,
  hobbies:[String]
})

//使用规则创建集合
const User = mongoose.model('User',userSchema)

//查询User集合中的所有文档
// User.find().then(res=>{
//   console.log(res);
// })

//条件查询
// User.find({
//   _id:'5fbe3ccd75c2fe84c03b7288'
// }).then(res=>{
//   console.log(res);
// })

//find方法返回一个数组，就是没数据，也是空数组，而findOne 返回一条数据（文档）
// User.findOne().then(res=>{
//   console.log(res);
// }).catch(err=>{
//   console.log(err);
// })

//$gt大于 $lt小于
// User.find({age: {$gt: 10,$lt: 20}}).then(res=>{
//   console.log(res);
// })

//$in 匹配包含
// User.find({
//   hobbies:{$in:['划水']}
// }).then(res=>{
//   console.log(res);
// })

//select 筛选要查询返回的字段或不返回的字段 默认返回id
// User.find({
//   hobbies:{$in:['足球']}
// }).select('name age -_id').then(res=>{
//   console.log(res);
// })

//根据字段对查询数据进行排序
//sort升序排列 sort('-age') 降序
// User.find().select('name age email').sort('-age').then(res=>{
//   console.log(res);
// })

//skip跳过几条数据  limit限制查询数量 可用于分页
// User.find().skip(2).limit(2).select('name age email -_id').then(res=>{
//   console.log(res);
// })

//deleteOne 按条件删除一条数据 
// User.findOneAndDelete({_id:'5fbe3ccd75c2fe84c03b7289'}).then(res=>{
//   //返回删除的一条数据
//   console.log(res);
// })

//deleteMany 按条件删除多条数据 若传一个空对象{} 则删除该集合下的所有文档
// User.deleteMany({}).then(res=>{
//   //返回一个对象
//   // { n: 4, ok: 1, deletedCount: 4 }
//   console.log(res);
// })

//updateOne 更新条件查询到的数据的一条数据的指定字段
// User.updateOne({name:"王五"},{name:"隔壁老王"}).then(res=>{
//   //返回一个对象
//   // { n: 1, nModified: 1, ok: 1 }
//   console.log(res);
// })

//updateMany 更新条件查询到的数据的所有数据的指定字段
User.updateMany({},{age:22}).then(res=>{
  //返回一个对象
  // { n: 6, nModified: 6, ok: 1 }
  console.log(res);
})