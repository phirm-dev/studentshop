const jwt = require('jsonwebtoken');
const { User } = require('../models');
const config = require('../config');

function resolveToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, config.token_key, (err, payload) => {
            if (err) {
                return reject(err);
            }
            resolve(payload);
        });
    });
}

exports.protect = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return next('No token provided');
    }
    const arr = authHeader.split(' ');
    const token = arr[0] === 'Bearer' ? arr[1] : false;
    try {
        const data = await resolveToken(token);
        const user = await User.findById(data.id);
        if (user) {
            req.user = user;
            next();
        } else {
            next('No user found');
        }
    } catch (e) {
        next('Invalid Token');
    }
}