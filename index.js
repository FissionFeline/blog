const express = require('express');
const helmet = require('helmet');
const app = express();
const public_route = require('./routes/public')
require('dotenv').config()
const db = require("./db_handler")
const admin = require('./routes/admin')
const bodyParser = require('body-parser')
const ejs = require("ejs")
const cookieParser = require('cookie-parser')
const session = require('express-session')

const auth = (req, res, next) => {
    console.log("here")
    next()
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SECRET,
}));
app.use('/articles/', public_route)

app.use('/edit/', auth, admin)

app.use(helmet())
app.set('host', process.env.IP || '127.0.0.1');
app.set('port', process.env.PORT || 2222);
app.disable('x-powered-by');

app.listen(process.env.PORT, function() {
    console.log(`App is running on ${process.env.PORT}`);
    console.log(`We are currently in a ${process.env.STATE} enviorment`)
});