// 简单的http服务
var http = require('http')

var server = http.createServer()
server.on('request', function(request, response){
	console.log('接受到用户的请求,请求路径是：', request.url)
})
server.listen(3000, function (){
	console.log('服务器启动成功, 通过访问 http://127.0.0.1:3000/ 进行访问')
})