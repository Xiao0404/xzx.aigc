const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    // res.end('hello world')
    if(req.url === '/index'){
    const content  = fs.readFileSync('./index.html',{encoding:'utf-8'})
       console.log(content);
       res.end(content)

    }
}).listen(3000)
