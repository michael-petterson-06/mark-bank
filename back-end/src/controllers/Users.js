const Users = require('../services/Users');

const getAll = async (_req, res) => {
    const getAll = await Users.getAll();
    return res.status(200).json(getAll);
}

module.exports = { getAll };