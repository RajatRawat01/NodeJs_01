"use strict";
exports.__esModule = true;
var express = require("express");
var transactions_1 = require("./transactions");
var accounts_1 = require("./accounts");
//how to use 
var app = express();
app.use("/module1", transactions_1["default"]);
app.use("/module2", accounts_1["default"]);
app.listen(8080, function () {
    console.log("sever started");
});
// ********How to execute modules.
//http://localhost:8080/module1----> got to transaction
//http://localhost:8080/module1/rajat----> got to transaction.
//http://localhost:8080/module2/--------->accounts. GET
////http://localhost:8080/module2--------> Post.
