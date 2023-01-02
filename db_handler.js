const { MongoClient } = require("mongodb");
require('dotenv').config()

class mongo_connection {
    constructor() {
        const mongo = new MongoClient(process.env.MLINK);
    }
}

module.exports = new mongo_connection()