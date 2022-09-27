const express = require('express');

const validateLogin = require('../middlewares/validation/validateLogin');
const User = require('../controllers/Users');

const router = express.Router();

router.post('/', validateLogin, User.login);


module.exports = router;







