var http = require('http');
const app = require('./module/route')

http.createServer(app).listen(3000);


app.get('/', (req, res) => {
  // res.writeHead({
  //   'Content-Type': 'text/html;charset="utf-8"'
  // })
  // res.end('首页')
  res.send('首页')
})


app.get('/login', (req, res) => {
  // res.writeHead({
  //   'Content-Type': 'text/html;charset="utf-8"'
  // })
  // res.end('登录')
  res.send('登录')
})

app.post('/login', (req, res) => {
  // res.writeHead({
  //   'Content-Type': 'text/html;charset="utf-8"'
  // })
  // res.end(req.body)
  res.send(req.body)
})


app.get('/register', (req, res) => {
  // res.writeHead({
  //   'Content-Type': 'text/html;charset="utf-8"'
  // })
  // res.end('注册')
  res.send('注册')
})

console.log('Server running at http://127.0.0.1:3000/');