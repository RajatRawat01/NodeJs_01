"use strict";
exports.__esModule = true;
var express = require("express");
var accounts = express.Router();
accounts.get("/", function (req, res) {
    res.status(200).json({ message: "Welcome to account module|" });
});
accounts.post("/", function (req, res) {
    res.status(200).json({ message: "Account will add soon" });
});
exports["default"] = accounts;
