//引入系统模块http
const http = require('http');
const url = require('url');
//创建网站服务器
const app = http.createServer();

app.on('request',(req,res)=>{
	const method = req.method.toLowerCase();
	const pathname = url.parse(req.url).pathname;
	
	res.writeHead(200,{
		'content-type':'text/html;charset=utf8'
	})
	if(method=='get'){
		if(pathname=='/'||pathname=='/index'){
			res.end('Welcome to index')
		}else if(pathname == '/list'){
			res.end('Welcome to list')
		}else{
			res.end('not find')
		}
	}else if(method == 'post'){
		
	}
})

app.listen(3000)
console.log('serve start!')