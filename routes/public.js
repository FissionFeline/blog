const db = require('../utils/db_handler.js');
const ObjectId = require('mongodb').ObjectId;
module.exports = (function() {
    var route = require('express').Router();

    route.get('/', function(req, res, next) {

    });

    //To do replace this with a join statement
    route.get('/:user/:article', function(req, res, next) {
        let params = {};
        try {
            params.object_id = new ObjectId(req.params.article);
            params.user = req.params.user;
        } catch (err) {
            return next();
        }
        db.articles.findOne({ _id: params.object_id, author_id: params.user }, {}, function(err, result) {
            if (err) next("Something went wrong!");
            if (!res) next("Document not found or deleted");
            db.users.findOne({ _id: params.user }, {}, function(err, result) {

            });
        });

    });

    route.use(function(err, req, res) {
        if (err) return res.send("err");
    });

    route.get('/:user/', function(req, res, next) {
        db.article.fine({ author_id: req.params.user }, {}, function(err, result) {
            console.log(res);
        });
    });
    route.use((req, res, next) => {
        res.send("Give us sth will ya ?");
    });
    return route;
})();