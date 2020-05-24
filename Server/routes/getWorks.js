//import express
var express = require('express');
var router = express.Router();
//import database
var sql = require('sqlite3');
var db = new sql.Database("serverData.db");
var result;

var baseQuery = "select * from work where ( type = ? OR type = ? ) AND (subject = ? OR subject = ? OR subject = ? OR subject = ?)";

router.get('/', function (req, res, next) {
    var ps = db.prepare(baseQuery);
    //construct query
    var typeFlag = false;
    var subjectFlag = false;
    var typeStr = "";
    var subjectStr = "";
    //select the patent or paper
    if(req.query.flags[0] == 1){
        typeFlag = true;
        typeStr += "patent";
    }
    if(!typeFlag && req.query.flags[1] == 1){
        typeFlag = true;
        typeStr += "paper";
    }
    //select the subject
    if(req.query.flags[2] == 1){
        subjectFlag = true;
        subjectStr = "artificial";
    }
    if(!subjectFlag && req.query.flags[3] == 1){
        subjectFlag = true;
        subjectStr = "data";
    }
    if(!subjectFlag && req.query.flags[4] == 1){
        subjectFlag = true;
        subjectStr = "math";
    }
    if(!subjectFlag && req.query.flags[5] == 1){
        subjectFlag = true;
        subjectStr = "robo";
    }
    console.log(typeStr);
    console.log(subjectStr);
    
    getWork(ps, typeStr, subjectStr, function () {
        console.log(result);
        res.send(result);
    })
})

var getWork = function (preQuery, strType, strSubject, callback) {
    //no select
    //console.log("enter a");
    if(strType === "" && strSubject === ""){
        preQuery.all("patent", "paper", "artificial", "data", "math", "robo", function (error, rows) {
            if (error) throw error;
            if (rows) {
                result = rows;
            }
            callback();
        });
    }
    //select type & no select sub
    if(strType != "" && strSubject ==="") {
        preQuery.all(strType, strType, "artificial", "data", "math", "robo", function (error, rows) {
            if (error) throw error;
            if (rows) {
                result = rows;
            }
            callback();
        });
    }
    // no select type * select sub
    if(strType === "" && strSubject != "") {
        preQuery.all("patent", "paper", strSubject, strSubject, strSubject, strSubject, function (error, rows) {
            if (error) throw error;
            if (rows) {
                result = rows;
            }
            callback();
        });
    }
    // select type & sub
    if (strType != "" && strSubject != "" ) {
        preQuery.all(strType, strType, strSubject, strSubject, strSubject, strSubject, function (error, rows) {
            if (error) throw error;
            if (rows) {
                result = rows;
            }
            callback();
        });
    }
}

module.exports = router;