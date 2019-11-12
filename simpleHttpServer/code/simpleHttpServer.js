// 简单的http服务
var http = require('http')
var server = http.createServer()
server.on('request', function(request, response){
	console.log('接受到用户的请求,请求路径是：', request.url)
	console.log('访问来源端口是：', request.socket.remotePort);
	// 可以多个write
	// response.write('hellow')
	// response.write('node.js')
	// response.end() // 必须end，不然客户端不会有响应
	//  上面的操作繁琐，慢
	// 可以使用 response.end('hellow')
	if (request.url === '/login') {
		// 可根据请求路径不同返回不同的结果
		// 假设返回以下数据
		var userInfo = [
			{
				name: 'JamJonson, 俊',
				age: 24
			}
		]
		// 响应内容只能是二进制数据或者字符串 
		response.setHeader('Content-Type', 'application/json; charset=UTF-8');
		response.end(JSON.stringify(userInfo))
	} else {
		response.setHeader('Content-Type', 'text/html; charset=UTF-8');
		response.end('<p>JamJonson, 俊<p>')
	}
})
server.listen(3000, function (){
	console.log('服务器启动成功, 通过访问 http://127.0.0.1:3000/ 进行访问')
})

// 联网的应用就有通信，网址通过DNS转化成ip地址找到服务器，通过端口好找到服务器上对应的程序
// 别人访问你的服务器的时候也是通过他自己的端口号访问到你的服务器, 来段端口request.socket.remotePort， 看node文档
// 乱码原因是:浏览器不知道你的内容是utf-8的编码，默认就会使用系统的编码，中文系统的编码默认是gbk,解决办法就是告诉浏览器你用的是什么编码 response.setHeader('Content-Type', 'application/json; charset=UTF-8');