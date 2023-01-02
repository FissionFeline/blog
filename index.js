const express = require('express');
const app = express();
const routing = require("./routing_sys.js");
require('dotenv').config()
const db = require("./db_handler")

app.use('', routing)

app.listen(process.env.PORT, function() {
    console.log(`App is running on ${process.env.PORT}`);
    console.log(`We are currently in a ${process.env.STATE} enviorment`)
});