const jwt = require("jsonwebtoken");
require("dotenv");


async function CreateJWT(name : string): Promise<string> {
    const payload = {
        accName: name,
        Enterprise: "Fortune"
    }

    const accessToken = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '8h' });

    return accessToken;
}

module.exports = {CreateJWT};