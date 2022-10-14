const { expression } = require('joi');
const { connect } = require('../routers/Users');
const Users = require('../services/Users');

const getAll = async (_req, res) => {
    const getAll = await Users.getAll();
    return res.status(200).json(getAll);
}

const getById = async (req, res, next) => {
    const { id } = req.params
    const user = await Users.getById(id);
    if (user.code) return next(user);
    return res.status(200).json(user);
}
const login = async (req, res) => {
    const { body } = req;
    const userLogin = await Users.login(body);
    return res.status(200).json(userLogin);
}

const createUser = async (req, res) => {
    const { body } = req;
    const newUser = await Users.createUser({...body});
    return res.status(201).json(newUser);
}

const editUser = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const editedUser = await Users.editUser(id, body);
    return res.status(200).json(editedUser)
}


const deleteUser = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    await Users.deleteUser(id);
    return res.status(204).end();
}


module.exports = {
    getAll,
    login,
    createUser,
    getById,
    editUser,
    deleteUser
};