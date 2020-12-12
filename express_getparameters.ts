// //read get paramters in expres.js

// import * as express from "express";

// //app is a rest obejct of type "any".
// let app = express();
// app.get("/sample/user/:uname/pwd/:upwd",(req:any,res:any)=>{

//     if(req.params.uname ==="rajat" && req.params.upwd=="rawat")
//     {
//         res.send({login:"Success"});
//     }
//     else{
//         res.send({login:"fail"});
//     }
//     //let uname=req.params.uname;
//     //let upwd=req.params.upwd;
//     console.log(req.params);
// });

// app.listen(8080,()=>{
//     console.log("server started");

// });

//localhost:8080/sample/user/rajat/pwd/rawat





//QUERY PARAMETERS

//http://localhost:8080/login?uname=admin&upwd=admin
//req.query.uname
//req.query.upwd

import * as express from "express";
let app:any = express();
app.get("/login",(req:any,res:any):any=>{
 if(req.query.uname === "admin" && req.query.upwd ==="admin")
 {
    res.status(201).json({login:"Success"});
}
else {
    res.status(400).json({login:"Failed"});

}
});

app.listen(8080,()=>
{
  console.log("server started");
});