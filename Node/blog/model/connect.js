const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost/blog',{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>{
  console.log("success");
}).catch(()=>{
  console.log("error");
})