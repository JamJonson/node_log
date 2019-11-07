// 读取文件
// fs 是filesystem,就是文件系统，
// node中要操作文件就必须引入fs
// 1、引入fs
var fs = require('fs')
// 2、使用readFile()读取文件nL
			// readFile两个参数第一个是读取文件的路径，第二个是回调函数
			// 回调函数内两个参数data, error,文件默认储存是二进制，读取转换成了16进制
fs.readFile('../../README.md', function (error, data) {
	console.log('data16进制:', data)
	console.log('data转成字符:', data.toString());
	console.log('error:', error)
})