//import express
var express = require('express');
var router = express.Router();
//import database
var sql = require('sqlite3');
var db = new sql.Database("serverData.db");

router.get('/', function (req, res, next) {
    console.log("success!");

    res.send("success!");
})

module.exports = router;