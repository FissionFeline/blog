const db = require('./db_handler.js')
const ObjectId = require('mongodb').ObjectId
module.exports = (function() {
    var route = require('express').Router();

    route.get('/', function(req, res, next) {

    })

    route.get('/create', function(req, res, next) {

    })

    route.get('/edit/:article', function(req, res, next) {

    })

    return route
})();