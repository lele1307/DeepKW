//import express
var express = require('express');
var router = express.Router();
// use database
var sql = require('sqlite3');
var db = new sql.Database('serverData.db');

var countResult;
var preSelect = db.prepare("select COUNT(1) AS c from candidate");
getNumber(preSelect, function(){
    return 0;
});
var baseQuery = "insert into candidate values ( ?, ?, ?, ?, ?, ?)";

router.get('/', function(req, res, next) {
    countResult.c += 1;
    var ps = db.prepare(baseQuery);
    //console.log(countResult.c);
    var inputCount = countResult.c;
    var inputName = "'" + req.query.name + "'";
    var inputGender = "'" + req.query.gender + "'";
    var inputCountry = "'" + req.query.country + "'";
    var inputUniversity = "'" + req.query.university + "'";
    var inputInfo = "'" + req.query.info + "'";
    runInsert(ps,inputCount, inputName, inputGender, inputCountry, inputUniversity, inputInfo ,function() {
        res.send("success!");
    })
})

function runInsert(preQuery, inCount, inName, inGender, inCountry, inUni, inInfo, callback) {
    preQuery.run(inCount, inName, inGender, inCountry, inUni, inInfo);
    callback();
}

function getNumber(preQuery, callback){
    preQuery.each(count);
    callback();
}

function count(error, row) {
    if (error) throw error;
    //console.log(row);
    countResult = row;
}

module.exports = router;