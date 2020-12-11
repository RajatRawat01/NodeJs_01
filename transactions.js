"use strict";
//create the sub module.
exports.__esModule = true;
var express = require("express");
var transactions = express.Router();
transactions.get("/", function (req, res) {
    res.status(200).json({ message: "transactions soon..." });
});
transactions.get("/rajat", function (req, res) {
    res.status(200).json({ message: "Welcome to rajat for nodejs" });
});
exports["default"] = transactions;
