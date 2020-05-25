//import express
var express = require('express');
var router = express.Router();
//import database
var sql = require('sqlite3');
var db = new sql.Database("serverData.db");
var result;

var baseQuery = "select * from news";
router.get('/', function (req, res, next) {
    var ps = db.prepare(baseQuery);
    getNews(ps, function () {
        console.log(result);
        res.send(result);
    })
})
var getNews = function (preQuery,callback) {
    preQuery.all( function (error, final) {
        if (error) throw error;
        if (final) {
            result = final;
        }
        callback();
    })
}
module.exports = router;