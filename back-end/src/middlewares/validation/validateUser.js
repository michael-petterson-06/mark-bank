const joi = require('joi');

const useSchema = joi.object().keys({
    name: joi.string().not().empty().required(),
    email: joi.string().not().empty().email().required(),
    idade: joi.number().not().empty().required(),
    gitHub: joi.string().not().empty().required(),
    cep: joi.string().not().empty().required(),
    estado: joi.string().not().empty().required(),
    cidade: joi.string().not().empty().required(),
    bairro: joi.string().not().empty().required(),
    rua: joi.string().not().empty().required(),
    numero: joi.string().not().empty().required(),
    complemento: joi.string().not().empty().required()
});

const validateUser = async (req,  _res, next) => {
    const user = req.body;
    const { error } = useSchema.validate(user);
    if (error) return next(error);
    next();
}

module.exports = validateUser;
// id, name, idade, gitHub, cep, estado, cidade, bairro, rua, numero, complemento