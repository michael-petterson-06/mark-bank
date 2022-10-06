const express = require('express');
const Users = require('../controllers/Users');

const token = require('../middlewares/token/authToken');
const validateUser = require('../middlewares/validation/validateUser');
const verifyUser = require('../middlewares/verification/verifyUser');

const router = express.Router();

router.post('/',token, validateUser, verifyUser);
router.get('/', Users.getAll);

module.exports = router;
