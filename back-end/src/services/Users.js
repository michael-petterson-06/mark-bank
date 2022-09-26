const Users = require('../models/Users');

const getAll = async () => {
    const getAll = await Users.getAll();
    return getAll;
}

module.exports = { getAll };
