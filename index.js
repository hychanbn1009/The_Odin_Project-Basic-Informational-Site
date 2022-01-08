const http = require('http')
const port = 8080
const fs = require('fs')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.readFile('./index.html','utf-8',(err,data)=>{
            res.end(data)
        })
    }
    else if(req.url==='/about'){
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.readFile('./about.html','utf-8',(err,data)=>{
            res.end(data)
        })
    }
    else if(req.url==='/contact-me'){
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.readFile('./contact-me.html','utf-8',(err,data)=>{
            res.end(data)
        })
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'})
        fs.readFile('./404.html','utf-8',(err,data)=>{
            res.end(data)
        })
    }
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})