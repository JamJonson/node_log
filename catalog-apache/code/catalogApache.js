//简单的目录获取
var http = require('http')
var server = http.createServer()
var fs = require('fs')
// 模板替换
server.on('request', function (request, response) {
    // var www = 'E:\workplace\node_log\catalog-apache\resoureces'
    var url = request.url
    // 获取html文件直接渲染，（没有替换）
    if (url === '/') {
        fs.readFile('../resoureces/index.html', function (err, data) {
            if (err) {
                console.log('错误')
                response.setHeader('Content-Type', 'application/json;charset=UTF-8')
                return response.end('404 错误')
            }
            var www = 'E:/workplace/node_log/catalog-apache/resoureces'
            fs.readdir(www, function (err, res) {
                if (err) {
                    console.log(err)
                    response.setHeader('Content-Type', 'application/json;charset=UTF-8')
                    return response.end('404 错误')
                } else {
                    var content = ''
                    res.forEach(function(item) {
                        content += `<tr>
                                    <td data-value="img/"><a class="icon dir" href="/E:/workplace/node_log/catalog-apache/resoureces/img/">${item}</a>
                                    </td>
                                    <td class="detailsColumn" data-value="0"></td>
                                    <td class="detailsColumn" data-value="1573655958">2019/11/13 下午10:39:18</td>
                                  </tr>`
                    })
                    data = data.toString()
                    data = data.replace('替换位置', content)
                    response.end(data)
                }
            })
        })
    } else {
      fs.readFile('../resoureces/index.html', function (err, res) {
          if (err) {
              return response.end('404 错误')
          } else {
              response.end(res)
          }
      })
    }
})
server.listen(3000, function () {
    console.log('服务器启动成功, 通过访问 http://127.0.0.1:3000/ 进行访问')
})