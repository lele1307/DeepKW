//import express
var express = require('express');
var router = express.Router();
//import database
var sql = require('sqlite3');
var db = new sql.Database("serverData.db");
var result;

var baseQuery = "select * from work";
var WHERE = " where";
var whereFlag = false;

router.get('/', function (req, res, next) {
    var typeFlag = false;
    var subjectFlag = false;
    whereFlag = false;
    //construct query
    var newQuery = baseQuery;
    if(req.query.flags[0] == 1){
        newQuery = checkFlag(newQuery);
        newQuery += " type = 'patent'";
        typeFlag = true;
    };
    if(req.query.flags[1] == 1 && !typeFlag){
        newQuery = checkFlag(newQuery);
        newQuery += " type = 'paper'";
    };
    if(req.query.flags[2] == 1){
        newQuery = checkFlag(newQuery);
        newQuery += " subject = 'artificial'";
        subjectFlag = true;
    };
    if(req.query.flags[3] == 1 && !subjectFlag){
        newQuery = checkFlag(newQuery);
        newQuery += " subject = 'data'";
        subjectFlag = true;
    };
    if(req.query.flags[4] == 1 && !subjectFlag){
        newQuery = checkFlag(newQuery);
        newQuery += " subject = 'math'";
        subjectFlag = true;
    };
    if(req.query.flags[5] == 1 && !subjectFlag){
        newQuery = checkFlag(newQuery);
        newQuery += " subject = 'robo'"
    };
    console.log(newQuery);
    
    getWork(newQuery, function () {
        console.log(result);
        res.send("success!");
    })
})

var getWork = function (query, callback){
    db.all(query, function (error, rows) {
        if (error) throw error;
        if (rows) {
            result = rows;
        }
        callback();
    });
};

var checkFlag = function(query) {
    if(whereFlag === false){
        query += WHERE;
        whereFlag = true;
    }
    else {
        query += " AND";
    }
    return query;
};

module.exports = router;