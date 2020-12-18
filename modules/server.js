"use strict";
exports.__esModule = true;
var express = require("express");
var accounts_1 = require("./accounts");
var transaction_1 = require("./transaction");
var cards_1 = require("./cards");
var app = express();
app.use("/accounts", accounts_1["default"]);
app.use("/transactions", transaction_1["default"]);
app.use("/cards", cards_1["default"]);
app.listen(8080, function () {
    console.log("server started");
});
//      http://localhost:8080/accounts
//      http://localhost:8080/accounts/login
//      http://localhost:8080/transactions   token,wish
//      http://localhost:8080/cards
