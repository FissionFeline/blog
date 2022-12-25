const { MongoClient } = require("mongodb");

class mongo_connection {
  constructur(con_str) {
   this.connection = new MongoClient(con_str) 
    
  }
}
