const { MongoClient } = require("mongodb");
require('dotenv').config()

class mongo_connection {
    constructor() {
        const mongo = new MongoClient(process.env.MLINK);
        this.article = mongo.db("articles")
        this.users = mongo.db("users")
    }
}

module.exports = new mongo_connection()