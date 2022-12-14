const crypto = require('crypto');
const Users = require('../models/Users');
const createToken = require('../middlewares/token/createToken');

const NOTFOUND = {code: 404, message: 'Usuário não encontrado'};
const CONFLICT = {code: 404, message: 'Usuário não existe'};
const SUCCESS_UPDATE = {code: 200, message: 'Usuário Atualizado com sucesso'};
const SUCCESS_DELETE = {code: 200, message: 'Usuário deletado com sucesso'};

const getAll = async () => {
    const getAll = await Users.getAll();
    return getAll;
};

const getById = async (id) => {
    const user = await Users.getById(id);
    if (!user) return NOTFOUND;
    return user;
}

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
};


const editUser = async (id, body) => {
    const user = await Users.getById(id);
    if (!user) return CONFLICT;
    Users.editUser(id, body);
    return SUCCESS_UPDATE;
}

const deleteUser = async (id) => {
    const resposta = await Users.deleteUser(id);
    if (!resposta) return NOTFOUND;
    return SUCCESS_DELETE;
}


module.exports = { 
    getAll,
    login,
    createUser,
    getById,
    editUser,
    deleteUser
};
