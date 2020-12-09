//Http Server
//How to develop http Serverin nodeJs.
//"Http" is the predefined module in Nodejs used to create the Http Server.
//no need to download http module.
// Http module already available along with node s/w.


// import module {http module}
// require() func used to import the modules.

let http = require("http");

//createServer is func in http mpdules helps to create http server.

let server = http.createServer((req,res)=>{

    res.write("welcome to http server");
    res.end();
});

server.listen(8080);

console.log("server listening the port no:8080");

