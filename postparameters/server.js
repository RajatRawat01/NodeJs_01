"use strict";
//import express modulules.
exports.__esModule = true;
var express = require("express");
//import bod-parser module
//body-parser module used to read the post parameters.
var bodyparser = require("body-parser");
//create the rest object.
var app = express();
//this rest app object to develop the rest services: GET,Post, DELETE,PUT
//MIME Type.-communication b/w Client n Server.
app.use(bodyparser.json());
//receive "form" data from client and parse it(extended Ex uname, pwd...).
app.use(bodyparser.urlencoded({ extended: false }));
//authorization Code.
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    var token = allHeaders.token; //this token is coming from client appl
    if (token === "nodej") {
        next();
    }
    else {
        res.status(401).json({ auth: "fail" });
    }
};
//create the post req
//To call auth inside post rreq, use auth[] after login comma(,)
app.post("/login", auth[], function (req, res) {
    if (req.body.uname == "admin" && req.body.upwd == "admin") {
        res.status(200).json({ login: "Success" });
    }
    else {
        res.status(401).json({ login: "fail" });
    }
    ;
});
app.listen(8080, function () {
    console.log("Server started successfully");
});
