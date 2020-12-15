//import express modulules.

import * as express from "express";

//import bod-parser module
//body-parser module used to read the post parameters.
import * as bodyparser from "body-parser";

//create the rest object.
let app:any = express();
//this rest app object to develop the rest services: GET,Post, DELETE,PUT

//MIME Type.-communication b/w Client n Server.
app.use(bodyparser.json());
//receive "form" data from client and parse it(extended Ex uname, pwd...).
app.use(bodyparser.urlencoded({extended:false}));

//authorization Code.

/*
let auth:any = (req:any,res:any,next:any):any=>{
let allHeaders = req.headers;
let token:any = allHeaders.token;//this token is coming from client appl
if(token === "nodej"){
    next();
}
else {
    res.status(401).json({auth:"fail"});
}
    
};  */
//create the post req
//To call auth inside post rreq, use auth[] after login comma(,)
app.post("/login",(req:any,res:any):any=>{
  if(req.body.uname=="admin" && req.body.upwd == "admin")
{
  res.status(200).json({login:"Success"});
}
else{
    res.status(401).json({login:"fail"});
};
});

app.listen(8080,()=>{
    console.log("Server started successfully");
});
