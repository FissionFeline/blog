module.exports = (function() {
    var route = require('express').Router();

    route.get('/', function(req, res, next) {
        res.send('');
    });

    route.get('/:user/:type', function(req, res, next) {
        if (req.params.type == 0) {
            next('route');
        }
        res.send(`You gave us ${req.params.type} ${req.params.user}`)
    });

    route.get('/:user/', function(req, res, next) {
        if (req.params.type == 0) {
            next('route');
        }
        res.send(`You gave us ${req.params.user}`)
    });
    route.use((req, res, next) => {
        res.send("Give us sth will ya ?");
    });
    return route;
})();