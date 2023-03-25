const { MongoClient } = require("mongodb");
require('dotenv').config()

class mongo_connection {
    constructor() {
        const mongo = new MongoClient(process.env.MLINK);
        this.blog = mongo.db("blog")
        this.articles = this.blog.collection("articles")
        this.users = this.blog.collection("users")
    }
}

module.exports = new mongo_connection()