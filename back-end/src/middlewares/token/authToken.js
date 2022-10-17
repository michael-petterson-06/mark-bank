const jwt = require('jsonwebtoken');
const jwtKey = require('fs')
    .readFileSync('jwt.evaluation.key', {encoding: 'utf-8'}).trim();

const Users = require('../../models/Users');

const authToken = async (req, _res, next) => {
    const token = req.headers.authorization;
    
    if (!token) {
        return next({code: 401, message: 'Token não encontrado'});
    }
    
    try {
        const decoded = jwt.verify(token, jwtKey);
        const user = await Users.getEmail(decoded.email)
        
        if (!user) {
            return next({code: 401, message: 'Token do usuário não encontrado'});
        }
  
        const {_id, password, ...useWithOutPassword } = user;
        req.user = {id: _id, ...useWithOutPassword}
        next();
  
    } catch (err) {

        return next({code: 401, message: 'Expirado ou token inválido'});

    }
    
}

module.exports = authToken;
