"use strict";
//import express module.
exports.__esModule = true;
var express = require("express");
var app = express();
//app object used to develop the rest services.
//Ex. GET, POST, PUT, DELETE,...
//get request
app.get("/rajat", function (req, res) {
    res.status(200).json({ "message": "Welcome to TypeScript." });
});
//assign post no
app.listen(8080, function () {
    console.log("server started successfully");
});
