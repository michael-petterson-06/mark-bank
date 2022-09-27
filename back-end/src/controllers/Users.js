const Users = require('../services/Users');

const getAll = async (_req, res) => {
    const getAll = await Users.getAll();
    return res.status(200).json(getAll);
}

const login = async (req, res) => {
    const { body } = req;
    const userLogin = await Users.login(body);
    return res.status(200).json(userLogin);
}

module.exports = {
    getAll,
    login
};