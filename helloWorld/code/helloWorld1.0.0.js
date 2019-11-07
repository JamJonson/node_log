// cd 进入改文件所在目录下 node helloWorld1.0.0.js 执行
// 结果 显示欢迎学习node
var hello = '欢迎学习node'
console.log(hello)

// 验证 结果RefernceError 应用错误
// 在node中，才用ecmaScript进行编码，没有BOM\DOM，和浏览器中的JavaScript不一样 
// console.log(window)
// console.log(document)

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