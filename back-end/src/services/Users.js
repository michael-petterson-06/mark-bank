const crypto = require('crypto');
const Users = require('../models/Users');
const createToken = require('../middlewares/token/createToken');

const NOTFOUND = {code: 404, message: 'Usuário não encontrado'};

const getAll = async () => {
    const getAll = await Users.getAll();
    return getAll;
};

const login = async ({email, password}) => {
    const md5Password = crypto.createHash('md5').update(password).digest('hex');
    const user = await Users.getByEmailPassword({email, password: md5Password});

    if (!user) return NOTFOUND;
    const { password:_, ...userLogin } = user;
    const token = createToken(userLogin);

    const userToken = {
        ...userLogin,
        token,
    };

    return userToken;
};

const createUser = async (body) => {

    const { password, ...allBody } = body;
    const md5Password = crypto.createHash('md5').update(password).digest('hex');
    const dataValues = await Users.createUser({...allBody, password: md5Password});

    if (dataValues.error) return dataValues;

    const { password: _, ...newUser} = dataValues;
    const token = createToken(newUser);

    const userToken = {
        ...newUser,
        token,
    }

    return userToken;
}

module.exports = { 
    getAll,
    login,
    createUser
};
