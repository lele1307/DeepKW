var express = require('express');
var router = express.Router();
// use database
var sql = require('sqlite3');
var db = new sql.Database('serverData.db');
var result;
var countResult;
db.all("select * from candidate", show);
db.each("select COUNT(1) AS c from candidate", count);

router.get('/', function(req, res, next) {
    //console.log(req.params);
    //console.log(req.path);
    //console.log(req.query.name);
    countResult.c += 1;
    //console.log(countResult.c);
    var sqlQuery = "insert into candidate values (" 
                    + countResult.c + " ," 
                    + "'" + req.query.name + "'" + " ,"
                    + "'" + req.query.gender + "'" + " ,"
                    + "'" + req.query.country + "'" + " ,"
                    + "'" + req.query.university + "'" + " ,"
                    + "'" + req.query.info + "'"
                    + ")" ;
    //console.log(sqlQuery);
    //console.log(req.query.university);
    db.all("select * from candidate", show);
    db.run(sqlQuery);
    res.send(result)
})

function show(error, rows) {
    if (error) throw error;
    result = rows;
    //console.log(rows);
}

function count(error, row) {
    if (error) throw error;
    //console.log(row);
    countResult = row;
}

module.exports = router;