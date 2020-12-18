//express
//express is the 3rd module in nodejs
//express is also framework (rest framework)
//express framework used to develop the rest services Ex. GET, POST, PUT, DELETE,...
//express module, will download by using "yarn" tool or "npm" tool.
// npm install express --save
       //OR
// yarn add express - -save

//all modules downloads to "node_modules" folder in current path.


let express = require("express");

//GET, POST, PUT, DELETE, HEAD, OPTIONS

//create the rest object---imp

let app = express();//consctrutor calling
//where app object is the rest object/
//where app object usd to develop the rest services.
//Get, Post, delete....

//get request
app.get("/",(req,res)=> {
  res.status(200).json({"message":"default get request..."}); //200 means ok
  });

  app.get("/demo",(req,res)=> {
    res.status(200).json({"message":"data from mongodb data soon..."}); //200 means ok
    });
  
    app.post("/",(req,res)=> {
        res.status(200).json({"message":"default post request.."}); //200 means ok
        });

        app.post("/demo",(req,res)=> {
            res.status(200).json({"message":"data from cassandra DB soon.."}); //200 means ok
            });    

            app.listen(8080,()=>{
               console.log("server started");
            });

//http://localhost:8080/     GET(in get--the link give to frontend dev) POSt
//http://localhost:8080/demo  GET POST