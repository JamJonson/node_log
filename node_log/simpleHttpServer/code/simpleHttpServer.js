// 简单的http服务
var http = require('http')

var server = http.createServer()
server.on('request', function(request, response){
	console.log('接受到用户的请求,请求路径是：', request.url)
	// 可以多个write
	response.write('hellow')
	response.write('node.js')
	response.end() // 必须end，不然客户端不会有响应
})
server.listen(3000, function (){
	console.log('服务器启动成功, 通过访问 http://127.0.0.1:3000/ 进行访问')
})