const jwt = require("jwt")
const generate_token = (ID) => {
    return jwt.sign(ID, process.env.SECRET, { expiresIn: '1800s' });
}