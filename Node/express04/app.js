const OrderItem = require('./model/order_item')
const Order = require('./model/order')

// const orderItem = new OrderItem({
//   order_id: "1",
//   title: "华为手机",
//   price: 7777
// })

// orderItem.save()


// OrderItem.find((err, res) => {
//   console.log(res);
// })

// OrderItem.findById(
//   '5fc87617239e93162c730274',
//   (err, res) => {
//     console.log(res);
//   }
// )

//扩展的静态方法
// OrderItem.findByOrderId(
//   '2',
//   (err, res) => {
//     console.log(res);
//   }
// )

//扩展的实例方法 指向已实例化的对象
// orderItem.print()

// OrderItem.find({
//   _id: '5fc8c4a8228f053588abb851'
// }, (err, res) => {
//   // console.log(res.order_id);
//   let tmp = res[0]
//   Order.find({
//     order_id: tmp.order_id
//   }, (err, res) => {
//     // console.log(res);
//     let item = JSON.parse(JSON.stringify(res[0]))
//     item.itemInfo = tmp
//     // item.itemInfo = "sss"
//     console.log(item);
//   })
// })

const mongoose = require('./model/db')
Order.aggregate([{
  $lookup: {
    from: "order_item",
    localField: "order_id",
    foreignField: "order_id",
    as: "itemInfo"
  }
}, {
  $match: {
    // _id: "5fc6039cb1cac7629702bd0e"
    _id: mongoose.Types.ObjectId('5fc6039cb1cac7629702bd0e')
  }
}], (err, res) => {
  console.log(JSON.stringify(res));
})