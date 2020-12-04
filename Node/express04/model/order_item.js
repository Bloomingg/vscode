const mongoose = require('./db')

const OrderItemSchema = mongoose.Schema({
  order_id: {
    type: String,
    required: true,
    index: true
  },
  title: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  num: {
    type: Number,
    default: 1
  }
})

//通过静态方法 扩展 
OrderItemSchema.statics.findByOrderId = function (order_id, cb) {
  this.find({
    order_id: order_id
  }, (err, res) => {
    cb(err, res)
  })
}

//实例方法
OrderItemSchema.methods.print = function () {
  console.log("实例方法--------------");
  console.log(this);
}

module.exports = mongoose.model('OrderItem', OrderItemSchema, 'order_item')