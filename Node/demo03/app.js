const {
  MongoClient
} = require('mongodb')
var http = require('http');
const ejs = require('ejs')
const querystring = require('querystring')
const app = require('./module/route')

const url = 'mongodb://root:19980930qq@127.0.0.1:27017'

const dbName = 'eggcms'

// const client = new MongoClient(url, {
//   useUnifiedTopology: true
// })

http.createServer(app).listen(3000);


app.get('/', (req, res) => {
  // client.connect((err) => {
  MongoClient.connect(url, {
    useUnifiedTopology: true
  }, (err, client) => {
    if (err) {
      console.log("fail");
      console.log(err);
      return
    }
    console.log("success");

    let db = client.db(dbName)

    // 查找数据
    db.collection('order_item').find({}).toArray((err, data) => {
      if (err) {
        console.log(err);
        return
      }
      console.log(data);
      client.close()
      // res.send('首页')
      ejs.renderFile("./view/index.ejs", {
        list: data
      }, (err, data) => {
        res.send(data)
      })
    })
  })



  // })
})

app.get('/register', (req, res) => {
  ejs.renderFile('./view/register.ejs', {}, (err, data) => {
    res.send(data)
  })
})

app.post('/register', (req, res) => {
  req.body = querystring.parse(req.body)
  console.log(req.body);
  if (!req.body.num) {
    req.body.num = 1
  }
  // res.send(req.body)
  MongoClient.connect(url, {
    useUnifiedTopology: true
  }, (err, client) => {
    if (err) {
      console.log(err);
      return
    }
    let db = client.db(dbName)

    db.collection('order_item').insertOne(req.body, (err, res) => {
      if (err) {
        console.log(err);
        return
      }
      console.log("新增成功");
      // res.send(301, '/')
    })

  })
})

console.log('Server running at http://127.0.0.1:3000/');