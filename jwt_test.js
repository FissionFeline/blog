const jwt = require('./token_management')

const ID = 38

const webtoken = jwt.generate_token(ID)

const ob = jwt.verify_token(webtoken)

console.log(ob)