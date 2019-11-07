// 简单的http服务
var http = require('http')

var server = http.createServer()
server.on('request', function(request, response){
	console.log('接受到用户的请求,请求路径是：', request.url)
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
				name: 'JamJonson',
				age: 24
			}
		]
		// 响应内容只能是二进制数据或者字符串 
		response.end(JSON.stringify(userInfo))
	}
})
server.listen(3000, function (){
	console.log('服务器启动成功, 通过访问 http://127.0.0.1:3000/ 进行访问')
})