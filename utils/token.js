const jwt = require('jsonwebtoken');
const config = require('../config');

exports.generateToken = function(payload) {
    //    Token expiresInMinutes: 60 // expires in 1 hour
    const token = jwt.sign(
        payload,
        config.token_key,
        { expiresIn: '5h' },
    );

    return token;
}