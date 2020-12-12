"use strict";
//http://localhost:8080/login?uname="admin"&upwd="admin"
exports.__esModule = true;
//import express module
var express = require("express");
//target is develop rest services..GET,POST,DELETE, PUT....
var app = express();
//app is used to create get,post,put,delete
//Authorization- We need to call callback ()
var auth = function (req, res, next) {
    var allheaders = req.headers;
    if (allheaders.token === "rajatIT") {
        next(); //means auth get succcessed.
    }
    else {
        res.status(500).json({ auth: "fail" });
    }
};
//get request.
//using auth , we can call authentication part here below
app.get("/login", [auth], function (req, res) {
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        res.status(201).json({ login: "Success" });
    }
    else {
        res.status(401).json({ login: "fail" });
    }
    ;
});
//default request/
app.get("/", function (req, res) {
    res.sendFile("E:/NodeJS/NodeJs_01/getparameters/index.html");
});
app.listen(8080, function () {
    console.log("Server started successfully");
});
