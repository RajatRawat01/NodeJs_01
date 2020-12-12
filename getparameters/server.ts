//http://localhost:8080/login?uname="admin"&upwd="admin"

//import express module

import * as express from "express";

//target is develop rest services..GET,POST,DELETE, PUT....

let app:any = express();
//app is used to create get,post,put,delete

//Authorization- We need to call callback ()

let auth = (req:any, res:any,next:any):any=>{
        let allheaders= req.headers;
        if(allheaders.token === "rajatIT"){
           next();//means auth get succcessed.
        }
        else{
            res.status(500).json({auth:"fail"});
        }
};

//get request.
//using auth , we can call authentication part here below
app.get("/login",[auth],(req:any,res:any):any=>{
  if(req.query.uname === "admin" && req.query.upwd === "admin")
{
    res.status(201).json({login:"Success"});

}
else {
    res.status(401).json({login:"fail"});
};
});


//default request/
app.get("/",(req:any,res:any):any=>{
   res.sendFile("E:/NodeJS/NodeJs_01/getparameters/index.html");
});

app.listen(8080,()=>{
    console.log("Server started successfully");
});