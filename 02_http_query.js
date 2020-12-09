//import http module.

let http = require("http");

//import url module
//url module used to read the query parameters.
//url predefined module.
//url module avaialble along with the node s/w.

let url = require("url");

//create the httpserver.
let server = http.createServer((req,res)=>{
// MIME type 
// hindi is mimetype.
res.writeHead(200,{'Content-Type':'Text/html'});
 
//parse the request..
let obj = url.parse(req.url,true).query;

 if(obj.uname === "rajat" && obj.upwd ==="rajat123")
 {
     res.write("<h1> Login Success Rajat Welcome</h1>");
 }
     else{
         res.write("<h2> Login failed</h2>");
     }
    

 res.end();
  });

server.listen(8080);
console.log("Server listening the port no:8080");