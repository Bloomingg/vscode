const MongoClient = require('mongodb').MongoClient
const Config = require('./config.js')

class Db {

  constructor() {
    //单例模式，防止数据库多次连接和多次实例化
    Db.instance = ""
    this.connect()
  }
  connect() {
    return new Promise((resolve, reject) => {
      if (!Db.instance) {
        MongoClient.connect(Config.dbUrl, {
          useUnifiedTopology: true
        }, (err, client) => {
          if (err) {
            reject(err)
            return
          } else {
            Db.instance = client.db(Config.dbName)
            resolve(Db.instance)
          }
        })
      } else {
        resolve(Db.instance)
      }

    })
  }
  find(collectionName, findJson) {
    return new Promise((resolve, reject) => {
      this.connect().then((db) => {
        let d1 = db.collection(collectionName).find(findJson)
        d1.toArray((err, res) => {
          if (err) {
            reject(err)
            return
          } else {
            resolve(res)
          }
        })
      })
    })
  }
  update() {

  }
  delete() {

  }
}

const myDb = new Db()
console.time('start');
myDb.find('order_item', {}).then((res) => {
  // console.log(res);
  console.timeEnd('start')
})

setTimeout(() => {
  console.time('start1');
  myDb.find('order_item', {}).then((res) => {
    // console.log(res);
    console.timeEnd('start1')
  })
}, 2000)

setTimeout(() => {
  console.time('start2');
  myDb.find('order_item', {}).then((res) => {
    // console.log(res);
    console.timeEnd('start2')
  })
}, 4000)

const myDb2 = new Db()
setTimeout(() => {
  console.time('end');
  myDb2.find('order_item', {}).then((res) => {
    // console.log(res);
    console.timeEnd('end')
  })
}, 6000)

setTimeout(() => {
  console.time('end1');
  myDb2.find('order_item', {}).then((res) => {
    // console.log(res);
    console.timeEnd('end1')
  })
}, 8000)

setTimeout(() => {
  console.time('end2');
  myDb2.find('order_item', {}).then((res) => {
    // console.log(res);
    console.timeEnd('end2')
  })
}, 9000)