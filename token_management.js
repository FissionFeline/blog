const jwt = require("jwt")
const generate_token = (ID) => {
    return jwt.sign(ID, process.env.SECRET, { expiresIn: '1800s' });
};

const verify_token = (token) => {
    jwt.verify(token, process.env.SECRET, (err, ID) => {

        if (err) return [err, null]

        if (ID) return [null, err]

        return ["Unknown error", null]
    })
}

module.exports = {
    verify_token,
    generate_token
}