const url = require('url')


function changeRes(res) {
  res.send = (data) => {
    res.writeHead(200, {
      'Content-Type': 'text/html;charset="utf-8"'
    })
    res.end(data)
  }
}

let server = () => {
  let G_get = {}
  let G_post = {}

  let app = (req, res) => {
    //扩展res方法
    changeRes(res)
    let pathname = url.parse(req.url).pathname
    let method = req.method.toLowerCase()
    console.log(method);
    if (G_get[pathname] || G_post[pathname]) {
      if (method == 'get') {
        // 执行方法
        G_get[pathname](req, res);
      } else {
        //获取post数据
        let postData = ''
        req.on('data', (data) => {
          postData += data
        })
        req.on('end', () => {
          req.body = postData
          G_post[pathname](req, res);
        })
      }
    } else {
      res.writeHead(404, {
        'Content-Type': 'text/html;charset="utf-8"'
      })
      res.end('页面不存在')
    }
  }

  app.get = (str, callback) => {
    // 注册方法
    G_get[str] = callback
  }

  app.post = (str, callback) => {
    G_post[str] = callback
  }

  return app
}


module.exports = server()