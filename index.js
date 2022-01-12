// const http = require('http')
// const port = 8080
// const fs = require('fs')

// const server = http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.writeHead(200,{'Content-Type':'text/html'})
//         fs.readFile('./index.html','utf-8',(err,data)=>{
//             res.end(data)
//         })
//     }
//     else if(req.url==='/about'){
//         res.writeHead(200,{'Content-Type':'text/html'})
//         fs.readFile('./about.html','utf-8',(err,data)=>{
//             res.end(data)
//         })
//     }
//     else if(req.url==='/contact-me'){
//         res.writeHead(200,{'Content-Type':'text/html'})
//         fs.readFile('./contact-me.html','utf-8',(err,data)=>{
//             res.end(data)
//         })
//     }
//     else{
//         res.writeHead(404,{'Content-Type':'text/html'})
//         fs.readFile('./404.html','utf-8',(err,data)=>{
//             res.end(data)
//         })
//     }
// })

// server.listen(port, () => {
//     console.log(`Server running at port ${port}`)
// })

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('src'));

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.get('/about',function(req,res) {
  res.sendFile(path.join(__dirname + '/src/about.html'));
});

app.route('/about').get(function(req,res){
  res.send('aboutme')
})

app.get('/contact-me',function(req,res) {
  res.sendFile(path.join(__dirname + '/src/contact-me.html'));
});

app.get('*', function(req, res){
  res.status(404).sendFile(path.join(__dirname + '/src/404.html'))
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});
