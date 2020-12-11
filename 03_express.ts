//import express module.

import * as express from "express";

let app:any = express();
//app object used to develop the rest services.
//Ex. GET, POST, PUT, DELETE,...

//get request
app.get("/rajat",(req:any,res:any)=>{
  res.status(200).json({"message":"Welcome to TypeScript."});
});

//assign post no
app.listen(8080,()=> {
 console.log("server started successfully");
});