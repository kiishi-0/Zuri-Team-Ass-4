const http = require('http')
const url = require('url');
const fs = require('fs');


function renderHTML (path, res){
    fs.readFile(path, null, (err, data)=>{
        if(err){
            res.writeHead(404);
            res.writeHead("File not found");
        }else{
            res.write(data);
        }
        res.end();
    })
}


const server = http.createServer((req, res)=>{
    res.writeHead(200, {"content-type": "text/html"});
    const path = url.parse(req.url).pathname;

    switch(path){
        case'/':
            renderHTML('./home.html', res)
            break;
        case'/home':
            renderHTML('./home.html', res)
            break;
        case '/about':
            renderHTML('./about.html', res)
            break;
        case '/contact':
            renderHTML('./contact.html', res)
            break;
        default:
            res.writeHead(404);
            res.write("Route not found")
            res.end();
    }
})

server.listen(5000, 'localhost', ()=>{
    console.log('listening for request on port 5000')
})

console.log("Yes you have created a server")