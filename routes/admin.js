const db = require('../db_handler.js')
const ObjectId = require('mongodb').ObjectId
module.exports = (function() {
    var route = require('express').Router();

    route.get('/', function(req, res, next) {

    })

    route.patch('/edit/:article', function(req, res, next) {

    })

    route.delete('/edit/:article', function(req, res, next) {

    })

    route.post('/create', function(req, res, next) {})

    return route
})();