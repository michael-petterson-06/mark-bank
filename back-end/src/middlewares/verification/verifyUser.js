const  Users  = require("../../models/Users");

const CONFLITC = {code: 409, message: 'Use already registered'};

const verifyUserAlreadyExists = async (email) => {
     const userAlreadyExists = await Users.getEmail(email);
     return Boolean(userAlreadyExists);
};


const verifyUser = async (req, _res, next) => {
    const newUser = req.body;
    const useAlreadyExists = await verifyUserAlreadyExists(newUser.email);
    if(useAlreadyExists) return next(CONFLITC);
    next();
}


module.exports = verifyUser;