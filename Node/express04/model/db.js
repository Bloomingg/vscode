const mongoose = require('mongoose')

mongoose.connect('mongodb://root:19980930qq@127.0.0.1:27017/eggcms?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, (err) => {
  if (err) {
    console.log(err);
    return
  }
  console.log('success');
})

module.exports = mongoose