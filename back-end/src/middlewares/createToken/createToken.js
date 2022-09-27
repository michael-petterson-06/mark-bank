const jwt = require('jsonwebtoken');
const jwtKey = require('fs')
    .readFileSync('jwt.evaluation.key', { encoding: 'utf-8' }).trim();

const jwtConfig= {
    algorithm: 'HS256'
}

const createToken = (user) => {
    const token = jwt.sign(user, jwtKey, jwtConfig);
    return token;
}

module.exports =  createToken;