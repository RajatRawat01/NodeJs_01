"use strict";
// //read get paramters in expres.js
exports.__esModule = true;
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
var express = require("express");
var app = express();
app.get("/login", function (req, res) {
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        res.status(201).json({ login: "Success" });
    }
    else {
        res.status(400).json({ login: "Failed" });
    }
});
app.listen(8080, function () {
    console.log("server started");
});
