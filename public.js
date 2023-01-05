const db = require('./db_handler.js')
const ObjectId = require('mongodb').ObjectId
module.exports = (function() {
    var route = require('express').Router();

    route.get('/', function(req, res, next) {
        res.send(''); // show all users
    });

    route.get('/:user/:article', function(req, res, next) {
        let params = {}
        try {
            params.object_id = new ObjectId(req.params.article)
            params.user = req.params.user
        } catch (err) {
            return next()
        }
        db.articles.findOne({ _id: params.object_id, author_id: params.user }, {}, function(err, result) {
            if (err) console.log(err)
            console.log(result)
        })

    });

    route.get('/:user/', function(req, res, next) {
        db.article.fine({ author_id: req.params.user }, {}, function(err, result) {
            console.log(res)
        })
    });
    route.use((req, res, next) => {
        res.send("Give us sth will ya ?");
    });
    return route;
})();