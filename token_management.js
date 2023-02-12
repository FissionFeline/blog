const jwt = require("jsonwebtoken")

require('dotenv').config()


const generate_token = (ID) => {
    return jwt.sign({ ID: ID }, process.env.SECRET, { expiresIn: '60d' });
};

const verify_token = (token) => {
    try {
        const result = jwt.verify(token, process.env.SECRET)
        return [null, result]
    } catch {
        return ["failed", null]
    }
}

module.exports = {
    verify_token,
    generate_token
}