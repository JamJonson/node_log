var fs = require('fs')

// 1、第一个参数是文件路径
// 2、第二个参数是文件内容
// 3、第三个参数是回调函数
// 创建文件
fs.writeFile('./wirteFile.md', '# 欢迎使用node.js', function(error) {
	console.log('error', error)
	console.log('成功')
})